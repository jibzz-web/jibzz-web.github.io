function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function toggleMode() {
  document.body.classList.toggle("light");
}

function showLoading(event) {
  event.preventDefault();
  const loading = document.getElementById("loading");
  loading.style.display = "block";
  setTimeout(() => {
    window.location.href = ""
    loading.innerText = "✅ Berhasil Login (Simulasi)";
  }, 2000);
}