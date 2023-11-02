import { Client } from "@notionhq/client";

export default async (req, context) => {
    
    const notion = new Client({ auth: process.env.NOTION });
    const response = await notion.databases.retrieve({ database_id: process.env.DATABASE_ID });


    return new Response(JSON.stringify(response));
  };

  export const config = {
    path: "/api/notion"
  };