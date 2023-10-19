import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wwxiguoourfkbupbbzwf.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3eGlndW9vdXJma2J1cGJiendmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDk2MDksImV4cCI6MjAxMzEyNTYwOX0.giTViiO6qehROlUZq72ZqOI9XsAtz1F7WcWHvWjBC8E",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3eGlndW9vdXJma2J1cGJiendmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDk2MDksImV4cCI6MjAxMzEyNTYwOX0.giTViiO6qehROlUZq72ZqOI9XsAtz1F7WcWHvWjBC8E"
    }
})