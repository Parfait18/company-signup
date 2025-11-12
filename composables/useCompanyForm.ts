import { ref, reactive, readonly } from 'vue';

export interface CompanyFormData {
  logo: string | null;
  name: string;
  description: string;
  website: string;
  address: string;
  sector: string;
}

// Global shared state
const state = reactive<CompanyFormData>({
  logo: null,
  name: '',
  description: '',
  website: '',
  address: '',
  sector: '',
});

export const useCompanyForm = () => {
  // Create a local reactive copy of the state
  const formData = reactive<CompanyFormData>({
    logo: state.logo,
    name: state.name,
    description: state.description,
    website: state.website,
    address: state.address,
    sector: state.sector,
  });

  // Watch for changes in formData and update the global state
  watch(
    () => ({ ...formData }),
    (newValue) => {
      Object.assign(state, newValue);
    },
    { deep: true }
  );

  // Watch for changes in global state and update the local formData
  watch(
    () => ({ ...state }),
    (newValue) => {
      Object.assign(formData, newValue);
    },
    { deep: true }
  );

  const isSubmitting = ref(false);
  const errors = ref<Partial<Record<keyof CompanyFormData, string>>>({});

  const validateForm = (): boolean => {
    errors.value = {};

    if (!formData.name.trim()) {
      errors.value.name = "Le nom de l'entreprise est requis";
      return false;
    }

    if (formData.website && !isValidUrl(formData.website)) {
      errors.value.website = "L'URL du site web n'est pas valide";
      return false;
    }

    return true;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(`https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const handleLogoUpload = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        reject(new Error('Le fichier ne doit pas dépasser 5 Mo'));
        return;
      }

      // Validate file type
      if (!file.type.match(/^image\/(png|jpeg|jpg)$/)) {
        reject(new Error('Le fichier doit être au format PNG ou JPEG'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        formData.logo = e.target?.result as string;
        resolve();
      };
      reader.onerror = () =>
        reject(new Error('Erreur lors de la lecture du fichier'));
      reader.readAsDataURL(file);
    });
  };

  const resetForm = () => {
    const defaultValues: CompanyFormData = {
      logo: null,
      name: '',
      description: '',
      website: '',
      address: '',
      sector: '',
    };
    Object.assign(formData, defaultValues);
    errors.value = {};
    isSubmitting.value = false;
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
      //   body: formData
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      // Créer une copie des erreurs existantes et ajouter l'erreur de soumission
      const currentErrors = { ...errors.value };
      currentErrors['submit' as keyof CompanyFormData] =
        "Une erreur est survenue lors de l'envoi du formulaire";
      errors.value = currentErrors;
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  // Method to update form data in a controlled way
  const updateFormData = <K extends keyof CompanyFormData>(
    key: K,
    value: CompanyFormData[K]
  ) => {
    formData[key] = value;
    // Also update the global state immediately
    state[key] = value;
  };

  return {
    formData,
    isSubmitting,
    errors,
    handleLogoUpload,
    resetForm,
    submitForm,
    validateForm,
    updateFormData,
  };
};
