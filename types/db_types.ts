export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      account: {
        Row: {
          created_at: string
          current_period_ends: string | null
          id: number
          plan_id: number
          profile_id: number
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_period_ends?: string | null
          id?: number
          plan_id?: number
          profile_id: number
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_period_ends?: string | null
          id?: number
          plan_id?: number
          profile_id?: number
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
        }
      }
      note: {
        Row: {
          content: string
          created_at: string
          id: number
          profile_id: number
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          profile_id: number
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          profile_id?: number
          title?: string
          updated_at?: string
        }
      }
      plan: {
        Row: {
          audience: string
          created_at: string
          description: string
          featured: boolean
          features: string[] | null
          id: number
          max_notes: number
          name: string
          price: number
          stripe_product_id: string | null
          updated_at: string
        }
        Insert: {
          audience: string
          created_at?: string
          description: string
          featured?: boolean
          features?: string[] | null
          id?: number
          max_notes?: number
          name: string
          price: number
          stripe_product_id?: string | null
          updated_at?: string
        }
        Update: {
          audience?: string
          created_at?: string
          description?: string
          featured?: boolean
          features?: string[] | null
          id?: number
          max_notes?: number
          name?: string
          price?: number
          stripe_product_id?: string | null
          updated_at?: string
        }
      }
      profile: {
        Row: {
          bio: string | null
          created_at: string
          display_name: string | null
          dob: string | null
          email: string
          first_name: string | null
          id: number
          last_name: string | null
          profile_location: string | null
          role: Database["public"]["Enums"]["ROLE"]
          updated_at: string
          user_uid: string
        }
        Insert: {
          bio?: string | null
          created_at?: string
          display_name?: string | null
          dob?: string | null
          email: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          profile_location?: string | null
          role?: Database["public"]["Enums"]["ROLE"]
          updated_at?: string
          user_uid: string
        }
        Update: {
          bio?: string | null
          created_at?: string
          display_name?: string | null
          dob?: string | null
          email?: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          profile_location?: string | null
          role?: Database["public"]["Enums"]["ROLE"]
          updated_at?: string
          user_uid?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ROLE: "ADMIN" | "USER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

