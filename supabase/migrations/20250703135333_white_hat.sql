/*
  # Create waitlist table for email submissions

  1. New Tables
    - `waitlist_submissions`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `created_at` (timestamp)
      - `source` (text) - tracks which section the email came from
      - `ip_address` (text) - for tracking purposes
      - `user_agent` (text) - for analytics

  2. Security
    - Enable RLS on `waitlist_submissions` table
    - Add policy for public insert access (since this is a public form)
    - Add policy for authenticated users to read data (for admin purposes)

  3. Indexes
    - Add index on email for fast lookups
    - Add index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS waitlist_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  source text DEFAULT 'unknown',
  ip_address text,
  user_agent text
);

-- Enable Row Level Security
ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public to insert (for form submissions)
CREATE POLICY "Allow public to submit emails"
  ON waitlist_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all data (for admin purposes)
CREATE POLICY "Allow authenticated users to read submissions"
  ON waitlist_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_submissions(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_submissions(created_at DESC);