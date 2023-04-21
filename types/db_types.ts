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
          created: string
          current_period_ends: string
          features: string[] | null
          id: number
          max_notes: number
          name: string
          plan_id: number
          plan_name: string
          profileId: number
          stripe_customer_id: string
          stripe_subscription_id: string
          updated: string
        }
        Insert: {
          created?: string
          current_period_ends?: string
          features?: string[] | null
          id?: number
          max_notes?: number
          name: string
          plan_id?: number
          plan_name: string
          profileId: number
          stripe_customer_id: string
          stripe_subscription_id: string
          updated?: string
        }
        Update: {
          created?: string
          current_period_ends?: string
          features?: string[] | null
          id?: number
          max_notes?: number
          name?: string
          plan_id?: number
          plan_name?: string
          profileId?: number
          stripe_customer_id?: string
          stripe_subscription_id?: string
          updated?: string
        }
      }
      note: {
        Row: {
          content: string
          created: string
          id: number
          profileId: number
          title: string
          updated: string
        }
        Insert: {
          content: string
          created?: string
          id?: number
          profileId: number
          title: string
          updated?: string
        }
        Update: {
          content?: string
          created?: string
          id?: number
          profileId?: number
          title?: string
          updated?: string
        }
      }
      plan: {
        Row: {
          created: string
          features: string[] | null
          id: number
          max_notes: number
          name: string
          stripe_product_id: string | null
          updated: string
        }
        Insert: {
          created?: string
          features?: string[] | null
          id?: number
          max_notes?: number
          name: string
          stripe_product_id?: string | null
          updated?: string
        }
        Update: {
          created?: string
          features?: string[] | null
          id?: number
          max_notes?: number
          name?: string
          stripe_product_id?: string | null
          updated?: string
        }
      }
      profile: {
        Row: {
          created: string
          email: string
          id: number
          role: Database["public"]["Enums"]["ROLE"]
          updated: string
          user_uid: string
        }
        Insert: {
          created?: string
          email: string
          id?: number
          role?: Database["public"]["Enums"]["ROLE"]
          updated?: string
          user_uid: string
        }
        Update: {
          created?: string
          email?: string
          id?: number
          role?: Database["public"]["Enums"]["ROLE"]
          updated?: string
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

