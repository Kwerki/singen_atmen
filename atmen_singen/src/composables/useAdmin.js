import { ref, computed } from 'vue';

const STORAGE_KEY = 'singen-atmen.admin.v1';

// Standard-Passwort: "atmen2026". Hier ändern, falls gewünscht.
// Hinweis: Da die Seite statisch ist, ist das nur ein Komfort-Schutz —
// kein echter Server-seitiger Auth-Mechanismus.
const ADMIN_PASSWORD = 'atmen2026';

const isAuthenticated = ref(localStorage.getItem(STORAGE_KEY) === '1');

function login(password) {
  const ok = password === ADMIN_PASSWORD;
  if (ok) {
    isAuthenticated.value = true;
    localStorage.setItem(STORAGE_KEY, '1');
  }
  return ok;
}

function logout() {
  isAuthenticated.value = false;
  localStorage.removeItem(STORAGE_KEY);
}

export function useAdmin() {
  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    login,
    logout,
  };
}
