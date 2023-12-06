

import nodemailer from 'nodemailer';


const handler = async function(request, context) {
    
  const {type, title, year } = await request.json();
  const id = Date.now();

  const transporter = nodemailer.createTransport({
      host: process.env.ESERVER,
    port: 587,
      logger: false, 
      secure: false,
      requireTLS: true,
      auth: {
        user: 'misha@qapush.com',
        pass: process.env.EPASS
      }
    });

    try{

      const htmlMessage = `<style>
  
      table {
        border-collapse: collapse;
      }
      
      tr:nth-child(odd){
        background-color: lightgrey;
      }
      
      td, th {
        padding: 1rem;
      }
    </style>
    
    <table>
      <tr>
        <th>Title</th>
        <td>${title}</td>
      </tr>
        <tr>
        <th>Year</th>
        <td>${year}</td>
      </tr>
        <tr>
        <th>Type</th>
        <td>${type}</td>
      </tr>
      
    </table>`

      const info = await transporter.sendMail({
          from: 'M. Kapush Contact" <misha@qapush.com>',
          to: "mihail.kapush@gmail.com",
          subject: `Movie recommendation nr ${id}`, 
          text: `Title: ${title}; Year: ${year}; Type: ${type}`, 
          html: htmlMessage, 
        });

        console.log("Message sent: %s", info.messageId);

        return new Response(JSON.stringify({ success: true }), { status: 200 });


    } catch(e){
        console.log(e);
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
    



};  

export default handler;

export const config = {
  path: '/api/recommend',
};
