import {Request, Response} from "express";
const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../../config/mail_smtp');

const emailsAnalise = ['alvaro@zarpar.net'];
// const emailsAnalise = ['ffleck@gmail.com'];


const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
       user: SMTP_CONFIG.user,
       pass: SMTP_CONFIG.pass,
    },
    tls: {
       rejectUnauthorized: false,
    }
 });

export const send_email =  async (req: Request, res: Response)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
 
    const informacoesEmail = req.body;
    let totalTaxas = 0;
    if (informacoesEmail.taxas.length > 0) {
        informacoesEmail.taxas.forEach((taxLine: { taxValue: number; }) => {
            totalTaxas =+ totalTaxas+(taxLine.taxValue * informacoesEmail.quantidade_containers);
        })
    }

    
    await transporter.sendMail({
        from: `Novo Pedido de Booking Zarpar- <lephanyx@gmail.com>`,
        subject: `Pedido de Booking de - ${informacoesEmail.embarcador_nome}`,
        to: emailsAnalise,
        html: 
        `
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <!--[if gte mso 9]>
        <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>
        
            <style type="text/css">
            @media only screen and (min-width: 520px) {
        .u-row {
            width: 500px !important;
        }
        .u-row .u-col {
            vertical-align: top;
        }

        .u-row .u-col-50 {
            width: 250px !important;
        }

        .u-row .u-col-100 {
            width: 500px !important;
        }

        }

        @media (max-width: 520px) {
        .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
        }
        .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
        }
        .u-row {
            width: 100% !important;
        }
        .u-col {
            width: 100% !important;
        }
        .u-col > div {
            margin: 0 auto;
        }
        }
        body {
        margin: 0;
        padding: 0;
        }

        table,
        tr,
        td {
        vertical-align: top;
        border-collapse: collapse;
        }

        .ie-container table,
        .mso-container table {
        table-layout: fixed;
        }

        * {
        line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
        }

        table, td { color: #000000; } @media (max-width: 480px) { #u_content_heading_1 .v-font-size { font-size: 18px !important; } #u_content_heading_3 .v-font-size { font-size: 18px !important; } }
            </style>
        
        

        </head>

        <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
            

        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
        </table>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>



        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:26px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <h1 class="v-font-size" style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; "><strong>Novo booking realizado!<br /></strong></h1>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>



        <div class="u-row-container" style="padding: 0px;background-color: transparent">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
            <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->
            
        <!--[if (mso)|(IE)]><td align="center" width="250" style="width: 250px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table id="u_content_heading_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <h3 class="v-font-size" style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; "><strong>Dados do Booking:</strong></h3>

            </td>
            </tr>
        </tbody>
        </table>

        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
            <div class="v-font-size" style="line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 19.6px;"><strong>Nome Embarcador:</strong> ${informacoesEmail.embarcador_nome}</p>
            <p style="line-height: 19.6px;"><strong>Endereço do Embarcador:</strong> ${informacoesEmail.embarcador_endereco}</p>
            <p style="line-height: 19.6px;"><strong>CNPJ Embarcador:</strong> ${informacoesEmail.embarcador_cnpj}</p>    
            <p style="line-height: 19.6px;"><strong>Armador:</strong> ${informacoesEmail.armador}</p>
            <p style="line-height: 19.6px;"><strong>Tipo de Container:</strong> ${informacoesEmail.tipo_container}</p>
            <p style="line-height: 19.6px;"><strong>Porto de Embarque:</strong> ${informacoesEmail.porto_embarque}</p>
            <p style="line-height: 19.6px;"><strong>Porto de Descarga:</strong> ${informacoesEmail.porto_descarga}</p>
            <p style="line-height: 19.6px;"><strong>Navio:</strong> ${informacoesEmail.navio}</p>
            <p style="line-height: 19.6px;"><strong>Data de Embarque:</strong> ${informacoesEmail.data_embarque}</p>
            <p style="line-height: 19.6px;"><strong>Tempo de Transito:</strong> ${informacoesEmail.tempo_de_transito}</p>
            <p style="line-height: 19.6px;"><strong>Data de Chegada:</strong> ${informacoesEmail.data_chegada}</p>
            <p style="line-height: 19.6px;"><strong>Base de Calculo de Frete:</strong> ${informacoesEmail.frete_base}</p>
            <p style="line-height: 19.6px;"><strong>Taxa Bunker de Frete:</strong> ${informacoesEmail.frete_bunker}</p>
            <p style="line-height: 19.6px;"><strong>Taxa ISPS de Frete:</strong> ${informacoesEmail.frete_isps}</p>
            <p style="line-height: 19.6px;"><strong>Id de Shipment:</strong> ${informacoesEmail.shipment_id}</p>
            <p style="line-height: 19.6px;"><strong>Quantidade de Conteiners :</strong> ${informacoesEmail.quantidade_containers}</p>
            <p style="line-height: 19.6px;"><strong>Carrier:</strong> ${informacoesEmail.selectCarrier}</p>
            <p style="line-height: 19.6px;"><strong>Contract Number:</strong> ${informacoesEmail.inputContracNumber}</p>
            <p style="line-height: 19.6px;"><strong>Booking Office:</strong> ${informacoesEmail.inputBookingOffice}</p>
            <p style="line-height: 19.6px;"><strong>Shipper:</strong> ${informacoesEmail.inputShipper}</p>
            <p style="line-height: 19.6px;"><strong>Forwarder:</strong> ${informacoesEmail.inputForwarder}</p>
            <p style="line-height: 19.6px;"><strong>Ref. Shipper Number</strong> ${informacoesEmail.inputshipperRefNumber}</p>
            <p style="line-height: 19.6px;"><strong>Ref. Forwarder Number</strong> ${informacoesEmail.inputforwardRefNumber}</p>
            <p style="line-height: 19.6px;"><strong>Consignee</strong> ${informacoesEmail.inputConsignee}</p>
            <p style="line-height: 19.6px;"><strong>Purchase Order Number</strong> ${informacoesEmail.inputpurchaseOrderNumber}</p>
            <p style="line-height: 19.6px;"><strong>Departure Early: </strong> ${informacoesEmail.dateDepartureEarly.split("/")[1]}/${informacoesEmail.dateDepartureEarly.split("/")[0]}/${informacoesEmail.dateDepartureEarly.split("/")[2]}</p>
            <p style="line-height: 19.6px;"><strong>Delivery Lastest: </strong> ${informacoesEmail.dateDeliveryLatest.split("/")[1]}/${informacoesEmail.dateDeliveryLatest.split("/")[0]}/${informacoesEmail.dateDeliveryLatest.split("/")[2]}</p>
            <p style="line-height: 19.6px;"><strong>Mercadoria: </strong> ${informacoesEmail.selectMercadoria.split(" - ")[1]}</p>
            <p style="line-height: 19.6px;"><strong>Charge Type:  </strong> ${informacoesEmail.selectPaymentChargeType}</p>
            <p style="line-height: 19.6px;"><strong>Paymnent Term:  </strong> ${informacoesEmail.selectPaymentTerm}</p>
            <p style="line-height: 19.6px;"><strong>Payer: </strong> ${informacoesEmail.selectPayer}</p>
            <p style="line-height: 19.6px;"><strong>Payment Location: </strong> ${informacoesEmail.inputPaymentLocation}</p>
            <p style="line-height: 19.6px;"><strong>Comments: </strong> ${informacoesEmail.textAreaCustomerComment}</p>
            <p style="line-height: 19.6px;"><strong>Email Notifications: </strong> ${informacoesEmail.inputPartnerEmailNotifications}</p>
            <p style="line-height: 19.6px;"><strong>Total do Frete:</strong> ${parseFloat(informacoesEmail.valor) + totalTaxas + 100}</p>
        </div>


            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]><td align="center" width="250" style="width: 250px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
        <div class="u-col u-col-50" style="max-width: 320px;min-width: 250px;display: table-cell;vertical-align: top;">
        <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
        <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
        
        <table id="u_content_heading_3" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <h3 class="v-font-size" style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; "><strong>Dados embarcador:</strong></h3>

            </td>
            </tr>
        </tbody>
        </table>

        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
            <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                
        <div class="v-font-size" style="line-height: 140%; text-align: left; word-wrap: break-word;">
            <p style="line-height: 19.6px;"><strong>Nome:</strong> ${informacoesEmail.embarcador_nome}</p>
            <p style="line-height: 19.6px;"><strong>Endereco:</strong> ${informacoesEmail.embarcador_endereco}</p>
            <p style="line-height: 19.6px;"><strong>CNPJ:</strong> ${informacoesEmail.embarcador_cnpj}</p>
            <p style="line-height: 19.6px;"><strong>Telefone:</strong> ${informacoesEmail.embarcador_telefone}</p>
        </div>

            </td>
            </tr>
        </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
        </div>
        </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
        </body>

        </html>
        `,
    })
    .then( ()=> {
        res.json({
            success: true,
            message: "E-mail enviado para análise",
        });
    })
    .catch( (err:any)=>{
        console.error(err);
        res.json({
            success: false,
            message: "Problema ao enviar e-mail para análise"
        })
        
    })
     
};
