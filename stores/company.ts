import { defineStore } from 'pinia'

export interface CompanyState {
  logo: string | null
  name: string
  description: string
  website: string
  address: string
  sector: string
}

export const useCompanyStore = defineStore('company', {
  state: (): CompanyState => ({
    logo: null,
    name: '',
    description: '',
    website: '',
    address: '',
    sector: ''
  }),
  
  actions: {
    updateField<K extends keyof CompanyState>(field: K, value: CompanyState[K]) {
      this.$patch((state) => {
        state[field] = value
      })
    },
    
    async uploadLogo(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        // Vérification de la taille du fichier (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          reject(new Error('Le fichier est trop volumineux. Taille maximale : 5MB'))
          return
        }

        // Vérification du type de fichier
        if (!file.type.match('image/(jpeg|png)')) {
          reject(new Error('Format de fichier non supporté. Utilisez JPEG ou PNG.'))
          return
        }

        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          this.logo = result
          resolve(result)
        }
        reader.onerror = () => {
          reject(new Error('Erreur lors de la lecture du fichier'))
        }
        reader.readAsDataURL(file)
      })
    },
    
    removeLogo() {
      this.logo = null
    }
  }
})
