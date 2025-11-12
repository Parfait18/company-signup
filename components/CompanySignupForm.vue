<template>
  <div
    class="flex-1 bg-white p-4 md:p-8 lg:p-12 overflow-y-auto order-2 lg:order-1"
  >
    <div class="max-w-lg mx-auto">
      <!-- Back Button -->
      <button
        @click="$router.push('/')"
        class="flex items-center gap-2 text-gray-700 mb-4 md:mb-8 hover:text-gray-900 transition-colors"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span class="text-sm font-medium">{{ $t('buttons.back') }}</span>
      </button>

      <!-- Form Title -->
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
        {{ $t('company.title') }}
      </h1>

      <form @submit.prevent="handleSubmit">
        <!-- Logo Upload -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-900 mb-3">
            {{ $t('company.logo.label') }}
          </label>
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div class="relative">
              <div
                v-if="!formData.logo"
                class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center"
              >
                <svg
                  class="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div
                v-else
                class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
              >
                <img
                  :src="formData.logo"
                  alt="Logo"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2 flex-1 w-full sm:w-auto">
              <div class="flex flex-col sm:flex-row gap-3">
                <label
                  class="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  {{
                    formData.logo
                      ? $t('company.logo.modify')
                      : $t('company.logo.add')
                  }}
                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg"
                    @change="handleLogoChange"
                    class="hidden"
                  />
                </label>
                <button
                  type="button"
                  @click="deleteLogo()"
                  :disabled="!formData.logo"
                  :class="[
                    'px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors w-full sm:w-auto',
                    formData.logo
                      ? 'border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
                      : 'border-gray-200 text-gray-400 cursor-not-allowed',
                  ]"
                >
                  {{ $t('company.logo.delete') }}
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-2">
                {{ $t('company.logo.format') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Company Name -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-900 mb-2">
            {{ $t('company.name.label') }} <span class="text-red-500">*</span>
          </label>
          <input
            :value="formData.name"
            @input="handleInputChange"
            name="name"
            type="text"
            :placeholder="$t('company.name.placeholder')"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <!-- Description -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-900 mb-2">
            {{ $t('company.description.label') }}
          </label>
          <textarea
            :value="formData.description"
            @input="handleInputChange"
            name="description"
            :placeholder="`${$t('company.description.placeholder')}\n\n• ${$t(
              'company.description.hints.history'
            )}\n• ${$t('company.description.hints.products')}\n• ${$t(
              'company.description.hints.culture'
            )}`"
            rows="7"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <!-- Website -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-900 mb-2">
            {{ $t('company.website.label') }}
          </label>
          <div class="flex">
            <span
              class="inline-flex items-center px-4 py-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg text-gray-600 text-sm font-medium"
            >
              https://
            </span>
            <input
              :value="formData.website"
              @input="handleInputChange"
              name="website"
              type="text"
              :placeholder="$t('company.website.placeholder')"
              class="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <!-- Address -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-900 mb-2">
            {{ $t('company.address.label') }}
          </label>
          <input
            :value="formData.address"
            @input="handleInputChange"
            name="address"
            type="text"
            :placeholder="$t('company.address.placeholder')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <!-- Sector -->
        <div class="mb-8">
          <label class="block text-sm font-medium text-gray-900 mb-2">
            {{ $t('company.sector.label') }}
          </label>
          <input
            :value="formData.sector"
            @input="handleInputChange"
            name="sector"
            type="text"
            :placeholder="$t('company.sector.placeholder')"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <!-- Navigation Buttons -->
        <div
          class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 pt-4"
        >
          <button
            type="button"
            @click="$router.push('/')"
            class="flex items-center justify-center gap-2 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors w-full sm:w-auto"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {{ $t('buttons.back') }}
          </button>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {{ isSubmitting ? 'Envoi...' : $t('buttons.continue') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCompanyForm } from '~/composables/useCompanyForm';

const { formData, errors, isSubmitting, updateFormData, submitForm } =
  useCompanyForm();

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const field = target.name as
    | 'name'
    | 'description'
    | 'website'
    | 'address'
    | 'sector';
  if (field) {
    updateFormData(field, target.value);
  }
};

const deleteLogo = () => {
  updateFormData('logo', null);
};

const handleLogoChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    updateFormData('logo', e.target?.result as string);
  };
  reader.readAsDataURL(file);
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  if (isSubmitting.value) return;

  const success = await submitForm();

  if (success) {
    // Rediriger ou afficher un message de succès
    console.log('Formulaire soumis avec succès');
  }
};
</script>
