export class SupabaseClient {
  // ... autres méthodes ...

  // Ajoutez ces méthodes si elles manquent :
  async getProductById(id: string): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Get product by id error:', error.message)
        return null
      }
      
      return data as Product
    } catch (error) {
      console.error('Get product by id exception:', error)
      return null
    }
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as Product
    } catch (error) {
      console.error('Update product error:', error)
      return null
    }
  }

  async deleteProduct(id: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Delete product error:', error.message)
        return false
      }
      
      return true
    } catch (error) {
      console.error('Delete product exception:', error)
      return false
    }
  }

  async getClientById(id: string): Promise<Client | null> {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Get client by id error:', error.message)
        return null
      }
      
      return data as Client
    } catch (error) {
      console.error('Get client by id exception:', error)
      return null
    }
  }

  async updateClient(id: string, updates: Partial<Client>): Promise<Client | null> {
    try {
      const { data, error } = await supabase
        .from('clients')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as Client
    } catch (error) {
      console.error('Update client error:', error)
      return null
    }
  }

  async createClient(client: Omit<Client, 'id' | 'created_at' | 'updated_at'>): Promise<Client | null> {
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([{
          ...client,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return data as Client
    } catch (error) {
      console.error('Create client error:', error)
      return null
    }
  }
}