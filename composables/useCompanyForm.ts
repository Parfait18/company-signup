import { ref, reactive } from 'vue';

export interface CompanyFormData {
  logo: string | null;
  name: string;
  description: string;
  website: string;
  address: string;
  sector: string;
  submit?: string;
}

// Create a reactive store
const createCompanyStore = () => {
  const state = reactive<CompanyFormData>({
    logo: null,
    name: '',
    description: '',
    website: '',
    address: '',
    sector: '',
    submit: undefined,
  });

  const isSubmitting = ref(false);
  const errors = ref<Partial<Record<keyof CompanyFormData, string>>>({});

  const updateFormData = <K extends keyof CompanyFormData>(
    field: K,
    value: CompanyFormData[K]
  ) => {
    state[field] = value;
  };

  const resetForm = () => {
    Object.assign(state, {
      logo: null,
      name: '',
      description: '',
      website: '',
      address: '',
      sector: '',
      submit: undefined,
    });
    errors.value = {};
  };

  const validateForm = (): boolean => {
    errors.value = {};
    let isValid = true;

    if (!state.name.trim()) {
      errors.value.name = "Le nom de l'entreprise est requis";
      isValid = false;
    }

    if (state.website && !isValidUrl(state.website)) {
      errors.value.website = "L'URL du site web n'est pas valide";
      isValid = false;
    }

    return isValid;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const submitForm = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    isSubmitting.value = true;

    try {
      // TODO: Implement API call to backend
      // const response = await $fetch('/api/companies', {
      //   method: 'POST',
      //   body: state
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', state);
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      // Add submission error
      errors.value = {
        ...errors.value,
        submit: "Une erreur est survenue lors de l'envoi du formulaire",
      };
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    formData: state,
    errors,
    isSubmitting,
    updateFormData,
    resetForm,
    validateForm,
    submitForm,
    isValidUrl,
  };
};

// Create a single instance of the store
const companyFormStore = createCompanyStore();

// Export the store
export const useCompanyForm = () => {
  // Expose the store's methods and state
  const {
    formData,
    isSubmitting,
    errors,
    validateForm,
    updateFormData,
    resetForm,
    submitForm,
    isValidUrl,
  } = companyFormStore;

  const handleLogoUpload = async (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          updateFormData('logo', e.target.result as string);
          resolve();
        } else {
          reject(new Error('Failed to read file'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };

      reader.readAsDataURL(file);
    });
  };

  return {
    formData,
    isSubmitting,
    errors,
    validateForm,
    handleLogoUpload,
    resetForm,
    submitForm,
    updateFormData,
    isValidUrl,
  };
};
