// ============================================================
// Academic Space - Multi-page application logic
// Pages: home (index.html), catalog (courses.html),
//        course (course.html?id=N), quiz (quiz.html?id=N)
// ============================================================

// ---- Page detection ----
const PAGE = document.body.dataset.page || 'home';
const QS = new URLSearchParams(window.location.search);

// ---- Global state ----
let currentCourse = null;

// ============ Shared: progress persistence ============
function loadProgress() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('courseProgress')); } catch (e) { /* ignore */ }
    if (!saved) return;
    courses.forEach(course => {
        const flags = saved[course.id];
        if (Array.isArray(flags)) {
            course.modules.forEach((module, index) => {
                module.completed = flags[index] || false;
            });
        }
    });
}

function saveProgress() {
    const progress = {};
    courses.forEach(course => {
        progress[course.id] = course.modules.map(module => module.completed);
    });
    localStorage.setItem('courseProgress', JSON.stringify(progress));
}

function courseProgress(course) {
    const done = course.modules.filter(module => module.completed).length;
    return {
        done,
        total: course.modules.length,
        pct: Math.round((done / course.modules.length) * 100)
    };
}

function findCourse(id) {
    return courses.find(course => course.id === id);
}

// ============ Shared: shared course card (link-based) ============
function courseCard(course) {
    const { done, total, pct } = courseProgress(course);
    return `
        <a class="course-card reveal" href="course.html?id=${course.id}" aria-label="Open course: ${course.title}">
            <div class="card-top">
                <span class="card-icon">${course.icon}</span>
                <span class="card-level">${course.level}</span>
            </div>
            <h3>${course.title}</h3>
            <p class="card-desc">${course.description}</p>
            <div class="card-meta">
                <span>🎥 ${total} ${total === 1 ? 'Lesson' : 'Lessons'}</span>
                <span>📝 ${course.quiz.length} Quiz</span>
            </div>
            <div class="card-progress">
                <div class="progress-bar small">
                    <div class="progress" style="width:${pct}%"></div>
                </div>
                <span class="progress-label">${done}/${total} completed</span>
            </div>
            <span class="card-cta">${pct === 100 ? 'Review Course' : 'Start Learning'} →</span>
        </a>
    `;
}

// ============ Shared: shell (nav, footer, reveal) ============
function setupShell() {
    // Active nav link
    const navKey = { home: 'home', catalog: 'courses', course: 'courses', quiz: 'courses' }[PAGE];
    document.querySelectorAll('.nav-links a[data-nav]').forEach(link => {
        link.classList.toggle('active', link.dataset.nav === navKey);
    });

    // Mobile hamburger
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('active');
        });
    });

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Nav shadow on scroll
    const nav = document.querySelector('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    setupReveal();
}

function setupReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

function setupCountUp() {
    const statEls = [
        document.getElementById('stat-courses'),
        document.getElementById('stat-lessons'),
        document.getElementById('stat-quizzes')
    ].filter(el => el);

    if (!statEls.length) return;
    if (!('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            io.unobserve(entry.target);
            countUp(entry.target, parseInt(entry.target.dataset.target || '0', 10));
        });
    }, { threshold: 0.4 });

    statEls.forEach(el => io.observe(el));
}

function countUp(el, target, duration = 1200) {
    el.textContent = '0';
    const start = performance.now();
    function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// ============ Home page ============
function initHome() {
    const featured = document.getElementById('featured-grid');
    if (featured) featured.innerHTML = courses.slice(0, 6).map(courseCard).join('');
    setupCountUp();
    setupReveal();
}

// ============ Catalog page ============
function initCatalog() {
    const grid = document.getElementById('courses-grid');
    const search = document.getElementById('catalog-search');
    const filters = document.getElementById('category-filters');
    const info = document.getElementById('catalog-info');
    const noResults = document.getElementById('no-results');
    let filter = 'All';

    // Pre-fill search from ?q= (e.g. home page search)
    const urlQuery = (QS.get('q') || '').trim();
    search.value = urlQuery;

    // Build category filter buttons
    const categories = ['All', ...new Set(courses.map(c => c.category))];
    filters.innerHTML = categories.map(cat =>
        `<button class="filter-btn ${cat === filter ? 'active' : ''}" data-filter="${cat}">${cat}</button>`
    ).join('');

    function matches(course) {
        const okCategory = filter === 'All' || course.category === filter;
        const query = search.value.trim().toLowerCase();
        const okQuery = !query || [course.title, course.description, course.category, course.level]
            .some(field => field.toLowerCase().includes(query));
        return okCategory && okQuery;
    }

    function render() {
        const list = courses.filter(matches);
        grid.innerHTML = list.map(courseCard).join('');
        noResults.classList.toggle('hidden', list.length > 0);
        info.textContent = `Showing ${list.length} of ${courses.length} courses`;
        setupReveal();
    }

    search.addEventListener('input', render);
    document.getElementById('catalog-search-btn').addEventListener('click', render);

    filters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filter = btn.dataset.filter;
        filters.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
        render();
    });

    document.getElementById('clear-search').addEventListener('click', () => {
        search.value = '';
        render();
    });

    render();
}

// ============ Course detail page ============
function initCourse() {
    const id = parseInt(QS.get('id'), 10);
    const course = findCourse(id);

    if (!course) {
        document.getElementById('course-not-found').classList.remove('hidden');
        document.getElementById('course-content').classList.add('hidden');
        return;
    }

    currentCourse = course;
    document.title = `${course.title} | Academic Space`;

    document.getElementById('course-icon').textContent = course.icon;
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-category').textContent = course.category;
    document.getElementById('course-level').textContent = course.level;
    document.getElementById('course-stats').textContent =
        `${course.modules.length} ${course.modules.length === 1 ? 'lesson' : 'lessons'} · ${course.quiz.length} quiz questions`;

    // Quiz + back links
    document.getElementById('take-quiz').setAttribute('href', `quiz.html?id=${course.id}`);
    document.getElementById('reset-progress').addEventListener('click', () => {
        if (!confirm(`Reset all progress for "${course.title}"?`)) return;
        course.modules.forEach(module => { module.completed = false; });
        saveProgress();
        renderModules();
        updateProgress();
    });

    renderModules();
    updateProgress();
    setupReveal();
}

function renderModules() {
    if (!currentCourse) return;
    const list = document.getElementById('content-list');
    list.innerHTML = currentCourse.modules.map((module, index) => `
        <div class="content-item ${module.completed ? 'completed' : ''} reveal" data-module="${index}">
            <div class="content-item-head">
                <span class="module-number">${String(index + 1).padStart(2, '0')}</span>
                <div>
                    <h3>${module.title}</h3>
                    <p class="content-description">${module.description}</p>
                </div>
            </div>
            <div class="video-wrapper">
                <iframe width="100%" height="315" src="${module.videoUrl}" title="${module.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="module-footer">
                <a href="${module.resources}" target="_blank" rel="noopener" class="resource-link">📚 Additional Resources</a>
                <button class="mark-complete-btn ${module.completed ? 'completed' : ''}" onclick="toggleModuleComplete(${index})">
                    ${module.completed ? '✓ Completed' : 'Mark as Complete'}
                </button>
            </div>
        </div>
    `).join('');
}

function toggleModuleComplete(moduleIndex) {
    if (!currentCourse) return;
    currentCourse.modules[moduleIndex].completed = !currentCourse.modules[moduleIndex].completed;
    saveProgress();
    renderModules();
    updateProgress();
}

function updateProgress() {
    if (!currentCourse) return;
    const { done, total, pct } = courseProgress(currentCourse);
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('progress-text');
    if (bar) bar.style.width = `${pct}%`;
    if (text) text.textContent = `${pct}% Complete · ${done}/${total} ${total === 1 ? 'lesson' : 'lessons'}`;
}

// ============ Quiz page ============
function initQuiz() {
    const id = parseInt(QS.get('id'), 10);
    const course = findCourse(id);

    if (!course) {
        document.getElementById('quiz-not-found').classList.remove('hidden');
        document.getElementById('quiz-content').classList.add('hidden');
        return;
    }

    document.title = `Quiz: ${course.title} | Academic Space`;
    document.getElementById('quiz-course-title').textContent = course.title;
    const backLink = `course.html?id=${course.id}`;
    document.getElementById('back-to-course-link').setAttribute('href', backLink);
    document.getElementById('back-to-course-btn').setAttribute('href', backLink);

    const container = document.getElementById('quiz-container');

    function renderQuiz() {
        container.innerHTML = course.quiz.map((q, qIndex) => `
            <div class="quiz-question reveal" data-q="${qIndex}">
                <h3>Question ${qIndex + 1} of ${course.quiz.length}</h3>
                <p class="quiz-question-text">${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((option, oIndex) => `
                        <label class="quiz-option">
                            <input type="radio" name="q${qIndex}" value="${oIndex}">
                            <span>${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
        setupReveal();
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById('submit-test').addEventListener('click', () => {
        const unanswered = course.quiz.some((q, index) =>
            !document.querySelector(`input[name="q${index}"]:checked`)
        );
        if (unanswered) {
            alert('Please answer all questions before submitting.');
            return;
        }

        let score = 0;
        const answers = [];
        course.quiz.forEach((q, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            const chosen = parseInt(selected.value, 10);
            answers.push({ question: q.question, options: q.options, chosen, correct: q.correct });
            if (chosen === q.correct) score++;
        });

        const pct = Math.round((score / course.quiz.length) * 100);

        document.getElementById('submit-test').classList.add('hidden');
        document.getElementById('quiz-result').classList.remove('hidden');

        document.getElementById('score-ring').style.setProperty('--score', pct);
        document.getElementById('score-percent').textContent = `${pct}%`;
        document.getElementById('result-detail').textContent =
            `You answered ${score} of ${course.quiz.length} questions correctly.`;

        const message = document.getElementById('result-message');
        if (pct >= 80) message.textContent = 'Excellent! Outstanding work 🎉';
        else if (pct >= 60) message.textContent = 'Great job! Keep it up 👍';
        else if (pct >= 40) message.textContent = 'Good effort. Review and try again 💪';
        else message.textContent = 'Keep learning and try again 🌱';

        document.getElementById('result-review').innerHTML = answers.map((a, index) => {
            const isCorrect = a.chosen === a.correct;
            return `
                <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                    <h4>${index + 1}. ${a.question}</h4>
                    <p class="review-answer ${isCorrect ? 'text-correct' : 'text-wrong'}">
                        Your answer: ${a.options[a.chosen]}
                    </p>
                    ${isCorrect ? '' : `<p class="review-correct">Correct answer: ${a.options[a.correct]}</p>`}
                </div>
            `;
        }).join('');

        scrollToTop();
    });

    document.getElementById('retry-test').addEventListener('click', () => {
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('submit-test').classList.remove('hidden');
        renderQuiz();
        scrollToTop();
    });

    renderQuiz();
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    setupShell();

    if (PAGE === 'home') initHome();
    else if (PAGE === 'catalog') initCatalog();
    else if (PAGE === 'course') initCourse();
    else if (PAGE === 'quiz') initQuiz();
});
