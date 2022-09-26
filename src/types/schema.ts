export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Attachment: {
        Row: {
          id: string;
          label: string;
          url: string;
          type: Database["public"]["Enums"]["AttachmentType"];
        };
        Insert: {
          id?: string;
          label: string;
          url: string;
          type: Database["public"]["Enums"]["AttachmentType"];
        };
        Update: {
          id?: string;
          label?: string;
          url?: string;
          type?: Database["public"]["Enums"]["AttachmentType"];
        };
      };
      _experience: {
        Row: {
          A: string;
          B: string;
        };
        Insert: {
          A: string;
          B: string;
        };
        Update: {
          A?: string;
          B?: string;
        };
      };
      Experience: {
        Row: {
          id: string;
          name: string;
          shortDescription: string;
          description: string;
          technologies: string[] | null;
          url: string;
        };
        Insert: {
          id?: string;
          name: string;
          shortDescription: string;
          description: string;
          technologies?: string[] | null;
          url: string;
        };
        Update: {
          id?: string;
          name?: string;
          shortDescription?: string;
          description?: string;
          technologies?: string[] | null;
          url?: string;
        };
      };
      _member: {
        Row: {
          A: string;
          B: string;
        };
        Insert: {
          A: string;
          B: string;
        };
        Update: {
          A?: string;
          B?: string;
        };
      };
      Member: {
        Row: {
          id: string;
          name: string;
          position: string;
          yearOfExperiences: number;
        };
        Insert: {
          id?: string;
          name: string;
          position: string;
          yearOfExperiences: number;
        };
        Update: {
          id?: string;
          name?: string;
          position?: string;
          yearOfExperiences?: number;
        };
      };
      _prisma_migrations: {
        Row: {
          id: string;
          checksum: string;
          finished_at: string | null;
          migration_name: string;
          logs: string | null;
          rolled_back_at: string | null;
          started_at: string;
          applied_steps_count: number;
        };
        Insert: {
          id: string;
          checksum: string;
          finished_at?: string | null;
          migration_name: string;
          logs?: string | null;
          rolled_back_at?: string | null;
          started_at?: string;
          applied_steps_count?: number;
        };
        Update: {
          id?: string;
          checksum?: string;
          finished_at?: string | null;
          migration_name?: string;
          logs?: string | null;
          rolled_back_at?: string | null;
          started_at?: string;
          applied_steps_count?: number;
        };
      };
      Expertise: {
        Row: {
          id: string;
          name: string;
          description: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      AttachmentType: "IMAGE" | "LINK" | "DOCUMENT";
    };
  };
}

