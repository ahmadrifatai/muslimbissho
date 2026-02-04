export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ad_creatives: {
        Row: {
          created_at: string
          id: string
          image_url: string | null
          is_active: boolean
          native_body: string | null
          native_cta: string | null
          native_headline: string | null
          target_url: string | null
          title: string
          type: Database["public"]["Enums"]["ad_creative_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          native_body?: string | null
          native_cta?: string | null
          native_headline?: string | null
          target_url?: string | null
          title: string
          type: Database["public"]["Enums"]["ad_creative_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          native_body?: string | null
          native_cta?: string | null
          native_headline?: string | null
          target_url?: string | null
          title?: string
          type?: Database["public"]["Enums"]["ad_creative_type"]
          updated_at?: string
        }
        Relationships: []
      }
      ad_events: {
        Row: {
          created_at: string
          creative_id: string | null
          event_type: Database["public"]["Enums"]["ad_event_type"]
          id: string
          page_path: string | null
          referrer: string | null
          session_id: string | null
          slot_id: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          creative_id?: string | null
          event_type: Database["public"]["Enums"]["ad_event_type"]
          id?: string
          page_path?: string | null
          referrer?: string | null
          session_id?: string | null
          slot_id: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          creative_id?: string | null
          event_type?: Database["public"]["Enums"]["ad_event_type"]
          id?: string
          page_path?: string | null
          referrer?: string | null
          session_id?: string | null
          slot_id?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      ad_slot_assignments: {
        Row: {
          created_at: string
          creative_id: string
          id: string
          is_active: boolean
          slot_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          creative_id: string
          id?: string
          is_active?: boolean
          slot_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          creative_id?: string
          id?: string
          is_active?: boolean
          slot_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ad_slot_assignments_creative_id_fkey"
            columns: ["creative_id"]
            isOneToOne: false
            referencedRelation: "ad_creatives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ad_slot_assignments_slot_id_fkey"
            columns: ["slot_id"]
            isOneToOne: true
            referencedRelation: "ad_slots"
            referencedColumns: ["id"]
          },
        ]
      }
      ad_slots: {
        Row: {
          created_at: string
          default_size: string
          description: string | null
          device_scope: string
          id: string
          name: string
          page_scope: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          default_size?: string
          description?: string | null
          device_scope?: string
          id: string
          name: string
          page_scope?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          default_size?: string
          description?: string | null
          device_scope?: string
          id?: string
          name?: string
          page_scope?: string
          updated_at?: string
        }
        Relationships: []
      }
      article_tags: {
        Row: {
          article_id: string
          created_at: string
          id: string
          tag_id: string
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          tag_id: string
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_tags_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "news_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          article_id: string
          content: string
          created_at: string
          id: string
          is_approved: boolean
          parent_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          article_id: string
          content: string
          created_at?: string
          id?: string
          is_approved?: boolean
          parent_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          article_id?: string
          content?: string
          created_at?: string
          id?: string
          is_approved?: boolean
          parent_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "news_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      news_articles: {
        Row: {
          author: string | null
          author_image: string | null
          category: string
          content: string | null
          created_at: string
          excerpt: string | null
          id: string
          image: string
          is_breaking: boolean | null
          is_featured: boolean | null
          published_at: string
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          author?: string | null
          author_image?: string | null
          category: string
          content?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          image?: string
          is_breaking?: boolean | null
          is_featured?: boolean | null
          published_at?: string
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          author?: string | null
          author_image?: string | null
          category?: string
          content?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          image?: string
          is_breaking?: boolean | null
          is_featured?: boolean | null
          published_at?: string
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          email: string
          id: string
          is_active: boolean
          subscribed_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean
          subscribed_at?: string
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      representative_applications: {
        Row: {
          created_at: string
          division: string | null
          email: string
          id: string
          location: string
          name: string
          phone: string | null
          reason: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          division?: string | null
          email: string
          id?: string
          location: string
          name: string
          phone?: string | null
          reason: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          division?: string | null
          email?: string
          id?: string
          location?: string
          name?: string
          phone?: string | null
          reason?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      representatives: {
        Row: {
          created_at: string
          designation: string
          district: string | null
          division: string | null
          email: string | null
          id: string
          image_url: string | null
          is_active: boolean
          location: string
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          designation: string
          district?: string | null
          division?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          location: string
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          designation?: string
          district?: string | null
          division?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          location?: string
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      team_member_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          is_approved: boolean
          member_name: string
          member_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_approved?: boolean
          member_name: string
          member_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_approved?: boolean
          member_name?: string
          member_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      ad_event_daily_stats: {
        Row: {
          clicks: number | null
          creative_id: string | null
          day: string | null
          impressions: number | null
          slot_id: string | null
        }
        Relationships: []
      }
      category_counts: {
        Row: {
          category: string | null
          count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_view_count: { Args: { article_id: string }; Returns: undefined }
    }
    Enums: {
      ad_creative_type: "image_banner" | "native"
      ad_event_type: "impression" | "click"
      app_role: "admin" | "editor" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      ad_creative_type: ["image_banner", "native"],
      ad_event_type: ["impression", "click"],
      app_role: ["admin", "editor", "user"],
    },
  },
} as const
