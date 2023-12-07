

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

      const htmlMessage = `      
        <table style="border-collapse: collapse;">
          <tr style="background-color: lightgrey;">
            <th style="padding: 0.5rem;">Title</th>
            <td style="padding: 0.5rem;">${title}</td>
          </tr>
          <tr>
            <th style="padding: 0.5rem;">Year</th>
            <td style="padding: 0.5rem;">${year}</td>
          </tr>
          <tr style="background-color: lightgrey;">
            <th style ="padding: 0.5rem;">Type</th>
            <td style="padding: 0.5rem;">${type}</td>
          </tr>
        </table>
      `

      const info = await transporter.sendMail({
          from: 'Movie Database" <misha@qapush.com>',
          to: "mihail.kapush@gmail.com",
          subject: `Recommendation nr ${id}`, 
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
