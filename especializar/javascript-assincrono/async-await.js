const promessa = new Promise((resolve, reject) => {
    return resolve('Ok')
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    }
    catch {
        console.log(e)
    }
    finally {
        console.log('Rodar sempre')
    }
}

start()

