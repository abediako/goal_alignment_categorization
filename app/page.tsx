"use client";
//what actually goes on the home page

//temp test for testing supabase implementation
import { supabase } from '@/lib/supabaseClient';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    supabase.from('content_sources').select('*').then(res => console.log(res))
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">
        Goal Alignment Project
      </h1>
      <p className="mt-2 text-gray-600">
        Welcome to the Goal Alignment Project! 
        This is a platform that makes sure that your social media is WORKING for you and serving you in the best way possible. 
        Have you ever tried to look for a specific creator that you follow for a certain purpose but can't remember? 
        We can help you with that. 
        Do you want to streamline content that helps you work towards a a certain goal? 
        We can help with that too! 
        Do you feel like stepping back into a hobby that you used to be into? 
        We can tell you exactly what creators to watch.
      </p>
    </main>
  );
}
