
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const themeToggle = document.getElementById('theme-toggle');

// Render Markdown
function renderMarkdown() {
  preview.innerHTML = marked.parse(markdownInput.value);
}

// Toolbar function
function addMarkdown(prefix, suffix) {
  const start = markdownInput.selectionStart;
  const end = markdownInput.selectionEnd;
  const text = markdownInput.value;
  const selected = text.slice(start, end);

  markdownInput.value = text.slice(0, start) + prefix + selected + suffix + text.slice(end);
  markdownInput.focus();
  renderMarkdown();
}

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Initial content
markdownInput.value = "# Welcome to Advanced Markdown Editor\n\nType **Markdown** here!";
renderMarkdown();

// Live update
markdownInput.addEventListener('input', renderMarkdown);
