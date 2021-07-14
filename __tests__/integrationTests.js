const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require('../app');
app.listen(5000, ()=>{});

describe('allocations routes', ()=>{
    // beforeEach((done)=>{
    //     mongoose.connect(process.env.DB_LOCATION, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     }).then(() => console.log("Established a connection to the database"))
    //     .catch(err => console.log("Something went wrong when connecting to the database", err));
    // })

    // afterEach((done)=>{
    //     mongoose.connection.db.dropDatabase(()=>{
    //         mongoose.connection.close(()=>done())
    //     })
    // })

    it('GET /api/clients/', async ()=>{
        const response = await supertest(app).get('/api/clients/')
        expect(response.status).toBe(200);
        console.log(response.body);
        
    })
    it('POST /api/allocations/', async ()=>{
        const data = {
            name: 'test',
            ce: 10
        }
        const response = await supertest(app).post('/api/allocations/new/').send(data)
        expect(response.status).toBe(200);
        expect(response.body.hasOwnProperty('ce')).toBeTruthy();
    })
    it('should fail on ce value less than 0', async ()=>{
        const data = {
            name: 'test',
            ce: -1
        }
        const response = await supertest(app).post('/api/allocations/new/').send(data)
        expect(response.status).toBe(400);
        console.log(response.body)
    })
    it('should fail on ce value greater than 100', async ()=>{
        const data = {
            name: 'test',
            ce: 101
        }
        const response = await supertest(app).post('/api/allocations/new/').send(data)
        expect(response.status).toBe(400);
        console.log(response.body)
    })
    it('should fail with no allocation name', async ()=>{
        const data = {
            ce: 101
        }
        const response = await supertest(app).post('/api/allocations/new/').send(data)
        expect(response.status).toBe(400);
        console.log(response.body)
    })
    it('should fail with allocation name less than 3 characters', async ()=>{
        const data = {
            name: 't',
            ce: 100
        }
        const response = await supertest(app).post('/api/allocations/new/').send(data)
        expect(response.status).toBe(400);
        console.log(response.body)
    })
})

