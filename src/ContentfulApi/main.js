import { createClient } from "contentful";

const useContentful= ()=> {

    const client =  createClient({
                space: 'dvq03x50kg91',
                accessToken: 'LbIwhGEFY9QQiuGmFNKhXJHDN8IlgrU_EbU-QccXXQA',
                host: 'preview.contentful.com'
            });

    const getAuthors = async () => {
        try {
            const entries = await client.getEntries({
                // content_type: 'fields',
                // select: 'fields'
            });
            return entries
        } catch (error) {
            console.log(`Error fetching Authors ${error}`)
        }
    };

    return { getAuthors };

}

export {useContentful};

// async function Connect() {
//     let client = await contentful.createClient({
//         accessToken: 'YCSWvdVRn2VDAMrBG1yuzebJ0dKNsh6iHjmSXGnZ7hM',
//     });
//     let space = await client.getSpace('dvq03x50kg91');
//     return await space.getEnvironment('master');
// }

// (async () => {
//     let env = await Connect();
//     console.log(env);
//     // await UpdateBuyer(env, 'Fd9j25LNJ0JIcnIwKgCF0')
//     // await UpdateBuyer(env, 'entries')
// })();

const contentful = require('contentful-management');

async function Connect() {
    let client = await contentful.createClient({
        accessToken: 'CFPAT-MAEouv1oF2R-oAndI4Odb0xdS2pN2ZI2Uk0dn9D49Lk',
    });
    let space = await client.getSpace('dvq03x50kg91');
    return await space.getEnvironment('master');
}

async function UpdateBuyer(env, buyerID){
    let buyer = await env.getEntry(buyerID);
    buyer.fields.euroName['en-US'] = 'El Toñito React Pro Master';
    await buyer.update();
    buyer = await env.getEntry(buyerID);
    await buyer.publish();
}

(async () => {
    let env = await Connect();
    // console.log(env);
    await UpdateBuyer(env, '4dO8NTb3C4szqrzA49ZLXz')
})();

