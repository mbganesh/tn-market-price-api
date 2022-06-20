const PORT = 8000
import express from "express"
import axios from "axios"
import * as cheerio from 'cheerio';

const app = express()
var priceData = []



// check
app.get('/' , (req,res) => {
    res.json('Server Works fine!!!')
})

// API
app.get('/api' ,  async (req,res) => {

   await axios.get('https://market.todaypricerates.com/Tamil-Nadu-vegetables-price').then((response) => {
        const html = response.data
        const $ = cheerio.load(html)

        const z = $('body > div.single-product-area > div.container > div > div.col-md-8 > div > div.Table > div > div').text()

        console.log(z);
        
        priceData.push({
            data:z
        })

        // $('div:contains("")' , html).each( (index , element) => {

        

        
        // })


    

     
    }).catch(err => console.log(err) )

    res.json(priceData)
})


app.listen(PORT , () => console.log('Server Running On :' , PORT))

// body > div.single-product-area > div.container > div > div.col-md-8 > div > div.Table > div:nth-child(2) > div:nth-child(1)

/**
 * 
 *    $('div:contains("")' , html).each( (index , element) => {

            const x = $(this).text()
            const y = $(this).attr('div')

            const z = $('body > div.single-product-area > div.container > div > div.col-md-8 > div > div.Table > div:nth-child(2) > div').text()

            console.log(z);

            priceData.push({
                data:z
            })
        })


 */



        /**
         * 
         *         const rootElem = 'body > div.single-product-area > div.container > div > div.col-md-8 > div > div.Table > div:nth-child(2) > div'
        $(rootElem).each((rootIndex , rootElem) => {
            console.log(rootElem);
                $(rootElem).children().each((subIndex , subElem) => {
                    console.log($(subElem).text());
                })
        })
         */