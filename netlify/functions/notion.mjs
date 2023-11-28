import { Client } from '@notionhq/client';

// eslint-disable-next-line
export default async (req, context) => {
  const notion = new Client({ auth: process.env.NOTION });
  let response;
  let data = [];
  let start_cursor = undefined;

  // Notion database query has a limit of 100 items per request
  // In case the database has more entries, make pagination requests
  // to add up entries to the data array

  do {
    try {
      response = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        start_cursor,
      });
    } catch (e) {
      console.log(e);
      return new Response(JSON.stringify({ error: 'Notion fetch failed' }), { status: 500 });
    }

    data.push(...response.results);
    start_cursor = response.next_cursor;
  } while (response.has_more && response.next_cursor);

  return new Response(JSON.stringify({ data }));
};

export const config = {
  path: '/api/notion',
};