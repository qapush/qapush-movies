require('dotenv').config();
const { Client } = require('@notionhq/client');
const axios = require('axios');

exports.handler = async (event, context) => {
  // const url = `https://api.notion.com/v1/databases/${process.env.NOTION_DB_ID}/query`;
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
  //     'Notion-Version': '2022-06-28',
  //   },
  // };

  let result = 'no result';
  let code = 500;

  // axios
  //   .get(url, config)
  //   .then((resp) => {
  //     result = JSON.stringify(resp.data);
  //     code = 200;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DB_ID;
  const data = await notion.databases.query({ database_id: databaseId });
  result = JSON.stringify(data);
  code = 200;

  return {
    statusCode: code,
    body: result,
  };
};
