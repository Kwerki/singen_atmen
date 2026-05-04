<template>
  <div class="main-container">
    <!-- ===== Login Screen ===== -->
    <div v-if="!isAuthenticated" class="login-wrapper">
      <v-card class="login-card" elevation="3">
        <v-card-text class="pa-8">
          <div class="text-center mb-6">
            <v-icon size="48" color="secondary">mdi-shield-lock-outline</v-icon>
            <h2 class="h2-style mt-3">Admin-Bereich</h2>
            <p class="body-text mt-2">Bitte Passwort eingeben.</p>
          </div>
          <v-form @submit.prevent="handleLogin">
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Passwort"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
              :error-messages="loginError"
              autofocus
              variant="outlined"
            ></v-text-field>
            <v-btn type="submit" color="primary" class="cta-btn" block>
              Anmelden
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>

    <!-- ===== Admin Dashboard ===== -->
    <template v-else>
      <div class="d-flex align-center justify-space-between mb-6 flex-wrap" style="gap: 12px;">
        <h1 class="h1-style">News verwalten</h1>
        <div class="d-flex" style="gap: 8px;">
          <v-btn variant="outlined" class="cta-btn" @click="triggerImport">
            <v-icon start>mdi-upload</v-icon>Import
          </v-btn>
          <input
            ref="importInput"
            type="file"
            accept="application/json"
            style="display: none"
            @change="handleImport"
          />
          <v-btn variant="outlined" class="cta-btn" @click="exportJson">
            <v-icon start>mdi-download</v-icon>Export
          </v-btn>
          <v-btn variant="text" color="error" class="cta-btn" @click="logout">
            <v-icon start>mdi-logout</v-icon>Logout
          </v-btn>
        </div>
      </div>

      <v-alert
        v-if="statusMessage"
        :type="statusType"
        class="mb-4"
        closable
        @click:close="statusMessage = ''"
      >
        {{ statusMessage }}
      </v-alert>

      <v-row>
        <!-- ===== Editor ===== -->
        <v-col cols="12" lg="6">
          <v-card class="admin-card" elevation="2">
            <v-card-title class="card-title">
              <v-icon start>{{ editingId ? 'mdi-pencil' : 'mdi-plus-circle-outline' }}</v-icon>
              {{ editingId ? 'News bearbeiten' : 'Neue News' }}
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid" @submit.prevent="saveNews">
                <v-text-field
                  v-model="form.title"
                  label="Titel"
                  placeholder="z.B. Neue Stundensätze ab Mai"
                  :rules="[rules.required]"
                  variant="outlined"
                  class="mb-3"
                ></v-text-field>

                <v-textarea
                  v-model="form.text"
                  label="Nachricht"
                  placeholder="Was möchten Sie mitteilen?"
                  :rules="[rules.required]"
                  rows="4"
                  variant="outlined"
                  class="mb-3"
                ></v-textarea>

                <v-text-field
                  v-model="form.date"
                  label="Datum"
                  type="date"
                  :rules="[rules.required]"
                  variant="outlined"
                  class="mb-3"
                ></v-text-field>

                <div class="image-section mb-3">
                  <label class="image-label">Bild</label>

                  <v-tabs v-model="imageTab" color="primary" density="compact" class="mb-3">
                    <v-tab value="upload">
                      <v-icon start>mdi-cloud-upload-outline</v-icon>Upload
                    </v-tab>
                    <v-tab value="asset">
                      <v-icon start>mdi-image-multiple-outline</v-icon>Vorlagen
                    </v-tab>
                  </v-tabs>

                  <v-window v-model="imageTab">
                    <v-window-item value="upload">
                      <div
                        class="dropzone"
                        :class="{ 'is-dragging': isDragging }"
                        @click="triggerImageUpload"
                        @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false"
                        @drop.prevent="handleDrop"
                      >
                        <input
                          ref="imageInput"
                          type="file"
                          accept="image/*"
                          style="display: none"
                          @change="handleImageUpload"
                        />
                        <div v-if="!form.imageData" class="dropzone-placeholder">
                          <v-icon size="40">mdi-image-plus</v-icon>
                          <p class="mt-2 mb-0">
                            Bild hier ablegen oder klicken
                          </p>
                          <small>Wird automatisch optimiert (max. 1200px)</small>
                        </div>
                        <div v-else class="dropzone-preview">
                          <img :src="form.imageData" alt="Vorschau" />
                          <v-btn
                            icon="mdi-close"
                            size="small"
                            class="remove-btn"
                            @click.stop="form.imageData = null"
                          ></v-btn>
                        </div>
                      </div>
                    </v-window-item>

                    <v-window-item value="asset">
                      <div class="asset-grid">
                        <div
                          v-for="opt in assetOptions"
                          :key="opt.value"
                          class="asset-tile"
                          :class="{ selected: form.imageId === opt.value && !form.imageData }"
                          @click="selectAsset(opt.value)"
                        >
                          <img :src="getAssetSrc(opt.value)" :alt="opt.label" />
                          <span>{{ opt.label }}</span>
                        </div>
                      </div>
                    </v-window-item>
                  </v-window>
                </div>

                <div class="d-flex" style="gap: 8px;">
                  <v-btn
                    type="submit"
                    color="primary"
                    class="cta-btn flex-grow-1"
                    :disabled="!valid"
                  >
                    <v-icon start>{{ editingId ? 'mdi-content-save' : 'mdi-plus' }}</v-icon>
                    {{ editingId ? 'Speichern' : 'Hinzufügen' }}
                  </v-btn>
                  <v-btn
                    v-if="editingId"
                    variant="outlined"
                    class="cta-btn"
                    @click="resetForm"
                  >
                    Abbrechen
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- ===== Preview ===== -->
        <v-col cols="12" lg="6">
          <v-card class="admin-card preview-card" elevation="2">
            <v-card-title class="card-title">
              <v-icon start>mdi-eye-outline</v-icon>Vorschau
            </v-card-title>
            <v-card-text>
              <div class="news-preview">
                <img
                  v-if="form.imageData || form.imageId"
                  :src="previewImage"
                  alt="Vorschau"
                  class="preview-image"
                />
                <div class="preview-body">
                  <div class="preview-date">{{ formatDate(form.date) }}</div>
                  <h3 class="h3-style mb-2">{{ form.title || 'Titel...' }}</h3>
                  <p class="body-text">{{ form.text || 'Text der Nachricht erscheint hier...' }}</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- ===== News List ===== -->
      <h2 class="h2-style mt-10 mb-4">Veröffentlichte News ({{ news.length }})</h2>

      <v-row v-if="news.length">
        <v-col v-for="item in news" :key="item.id" cols="12" md="6">
          <v-card class="news-item-card" elevation="1">
            <div class="d-flex">
              <img :src="getImageSrc(item)" alt="" class="news-thumb" />
              <div class="flex-grow-1 pa-4">
                <div class="d-flex justify-space-between align-start mb-1">
                  <div class="news-date-small">{{ formatDate(item.date) }}</div>
                  <div class="d-flex" style="gap: 4px;">
                    <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="editNews(item)"></v-btn>
                    <v-btn icon="mdi-delete" size="x-small" variant="text" color="error" @click="confirmDelete(item)"></v-btn>
                  </div>
                </div>
                <h4 class="news-item-title">{{ item.title }}</h4>
                <p class="news-item-text">{{ item.text }}</p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-card v-else class="empty-state pa-8 text-center" variant="tonal">
        <v-icon size="48">mdi-newspaper-variant-outline</v-icon>
        <p class="mt-3">Noch keine News vorhanden.</p>
      </v-card>

      <!-- Delete Confirmation -->
      <v-dialog v-model="deleteDialog" max-width="400">
        <v-card>
          <v-card-title>News löschen?</v-card-title>
          <v-card-text>
            "{{ itemToDelete?.title }}" wird unwiderruflich entfernt.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="text" class="cta-btn" @click="deleteDialog = false">Abbrechen</v-btn>
            <v-btn color="error" class="cta-btn" @click="performDelete">Löschen</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useNews } from '@/composables/useNews';
import { useAdmin } from '@/composables/useAdmin';

const { isAuthenticated, login, logout } = useAdmin();
const {
  news,
  addNews,
  updateNews,
  deleteNews,
  getImageSrc,
  exportJson,
  importJson,
  processImageFile,
  assetOptions,
} = useNews();

// ===== Login =====
const password = ref('');
const showPassword = ref(false);
const loginError = ref('');

const handleLogin = () => {
  loginError.value = '';
  if (!login(password.value)) {
    loginError.value = 'Falsches Passwort';
    password.value = '';
  }
};

// ===== Form =====
const form = reactive({
  title: '',
  text: '',
  date: new Date().toISOString().split('T')[0],
  imageId: 1,
  imageData: null,
});
const valid = ref(false);
const editingId = ref(null);
const imageTab = ref('upload');
const isDragging = ref(false);
const imageInput = ref(null);
const importInput = ref(null);
const statusMessage = ref('');
const statusType = ref('success');
const deleteDialog = ref(false);
const itemToDelete = ref(null);

const rules = {
  required: (v) => !!v || 'Pflichtfeld',
};

const previewImage = computed(() => {
  if (form.imageData) return form.imageData;
  return getImageSrc({ imageId: form.imageId });
});

const getAssetSrc = (id) => getImageSrc({ imageId: id });

// ===== Image handling =====
const triggerImageUpload = () => imageInput.value?.click();

const handleImageUpload = async (e) => {
  const file = e.target.files?.[0];
  if (file) await processFile(file);
  e.target.value = '';
};

const handleDrop = async (e) => {
  isDragging.value = false;
  const file = e.dataTransfer.files?.[0];
  if (file) await processFile(file);
};

const processFile = async (file) => {
  try {
    form.imageData = await processImageFile(file);
    form.imageId = null;
  } catch (err) {
    showStatus(err.message, 'error');
  }
};

const selectAsset = (id) => {
  form.imageId = id;
  form.imageData = null;
};

// ===== CRUD =====
const saveNews = () => {
  if (editingId.value) {
    updateNews(editingId.value, { ...form });
    showStatus('News aktualisiert.');
  } else {
    addNews({ ...form });
    showStatus('News hinzugefügt.');
  }
  resetForm();
};

const editNews = (item) => {
  editingId.value = item.id;
  form.title = item.title;
  form.text = item.text;
  form.date = item.date;
  form.imageId = item.imageId ?? null;
  form.imageData = item.imageData ?? null;
  imageTab.value = item.imageData ? 'upload' : 'asset';
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const resetForm = () => {
  editingId.value = null;
  form.title = '';
  form.text = '';
  form.date = new Date().toISOString().split('T')[0];
  form.imageId = 1;
  form.imageData = null;
  imageTab.value = 'upload';
};

const confirmDelete = (item) => {
  itemToDelete.value = item;
  deleteDialog.value = true;
};

const performDelete = () => {
  deleteNews(itemToDelete.value.id);
  deleteDialog.value = false;
  itemToDelete.value = null;
  showStatus('News gelöscht.');
};

// ===== Import =====
const triggerImport = () => importInput.value?.click();

const handleImport = async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    await importJson(file);
    showStatus('News importiert.');
  } catch (err) {
    showStatus('Import fehlgeschlagen: ' + err.message, 'error');
  }
  e.target.value = '';
};

// ===== Helpers =====
const showStatus = (msg, type = 'success') => {
  statusMessage.value = msg;
  statusType.value = type;
  setTimeout(() => (statusMessage.value = ''), 3500);
};

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
}

.admin-card {
  border-radius: 16px;
  height: 100%;
}

.preview-card {
  background: #fafafa;
}

.card-title {
  font-family: 'Kolage Light', sans-serif;
  font-size: 1.15rem;
  padding: 16px 20px;
  display: flex;
  align-items: center;
}

.image-section {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 16px 0;
  margin: 8px 0;
}

.image-label {
  display: block;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
}

.dropzone {
  border: 2px dashed rgba(201, 123, 42, 0.35);
  border-radius: 12px;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  position: relative;
  overflow: hidden;
  background: rgba(201, 123, 42, 0.03);
}

.dropzone:hover,
.dropzone.is-dragging {
  border-color: #c97b2a;
  background: rgba(201, 123, 42, 0.08);
}

.dropzone-placeholder {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}

.dropzone-placeholder small {
  display: block;
  margin-top: 4px;
  opacity: 0.7;
}

.dropzone-preview {
  width: 100%;
  position: relative;
}

.dropzone-preview img {
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

.remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.95) !important;
}

.asset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
}

.asset-tile {
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  background: #fff;
  transition: transform 0.15s ease, border-color 0.15s ease;
  position: relative;
}

.asset-tile:hover {
  transform: translateY(-2px);
}

.asset-tile.selected {
  border-color: #c97b2a;
  box-shadow: 0 0 0 3px rgba(201, 123, 42, 0.15);
}

.asset-tile img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  display: block;
}

.asset-tile span {
  display: block;
  text-align: center;
  font-size: 0.85rem;
  padding: 6px;
  color: rgba(0, 0, 0, 0.7);
}

/* Preview */
.news-preview {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.preview-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.preview-body {
  padding: 20px;
}

.preview-date {
  font-size: 0.85rem;
  color: #9a8c7a;
  margin-bottom: 8px;
  font-weight: 500;
}

/* News list */
.news-item-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.news-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08) !important;
}

.news-thumb {
  width: 110px;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}

.news-date-small {
  font-size: 0.75rem;
  color: #9a8c7a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.news-item-title {
  font-family: 'Kolage Light', sans-serif;
  font-size: 1rem;
  margin: 4px 0 6px;
  line-height: 1.3;
}

.news-item-text {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.empty-state {
  border-radius: 16px;
}

@media (max-width: 600px) {
  .news-thumb {
    width: 90px;
  }
}
</style>
