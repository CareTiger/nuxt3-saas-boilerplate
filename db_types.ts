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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      account: {
        Row: {
          current_period_ends: string
          features: string[] | null
          id: number
          join_password: string
          max_members: number
          max_notes: number
          name: string
          plan_id: number
          plan_name: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
        }
        Insert: {
          current_period_ends?: string
          features?: string[] | null
          id?: number
          join_password: string
          max_members?: number
          max_notes?: number
          name: string
          plan_id: number
          plan_name: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
        }
        Update: {
          current_period_ends?: string
          features?: string[] | null
          id?: number
          join_password?: string
          max_members?: number
          max_notes?: number
          name?: string
          plan_id?: number
          plan_name?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
        }
      }
      membership: {
        Row: {
          access: Database["public"]["Enums"]["ACCOUNT_ACCESS"]
          account_id: number
          id: number
          pending: boolean
          profile_id: number
        }
        Insert: {
          access?: Database["public"]["Enums"]["ACCOUNT_ACCESS"]
          account_id: number
          id?: number
          pending?: boolean
          profile_id: number
        }
        Update: {
          access?: Database["public"]["Enums"]["ACCOUNT_ACCESS"]
          account_id?: number
          id?: number
          pending?: boolean
          profile_id?: number
        }
      }
      note: {
        Row: {
          account_id: number | null
          id: number
          note_text: string
        }
        Insert: {
          account_id?: number | null
          id?: number
          note_text: string
        }
        Update: {
          account_id?: number | null
          id?: number
          note_text?: string
        }
      }
      plan: {
        Row: {
          features: string[] | null
          id: number
          max_members: number
          max_notes: number
          name: string
          stripe_product_id: string | null
        }
        Insert: {
          features?: string[] | null
          id?: number
          max_members?: number
          max_notes?: number
          name: string
          stripe_product_id?: string | null
        }
        Update: {
          features?: string[] | null
          id?: number
          max_members?: number
          max_notes?: number
          name?: string
          stripe_product_id?: string | null
        }
      }
      profile: {
        Row: {
          display_name: string | null
          email: string
          id: number
          supabase_uid: string
        }
        Insert: {
          display_name?: string | null
          email: string
          id?: number
          supabase_uid: string
        }
        Update: {
          display_name?: string | null
          email?: string
          id?: number
          supabase_uid?: string
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
      ACCOUNT_ACCESS: "READ_ONLY" | "READ_WRITE" | "ADMIN" | "OWNER"
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

