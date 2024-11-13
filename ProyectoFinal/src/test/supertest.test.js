import supertest from "supertest";
import chai from "chai";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing de la App Web Adoptme", () => {
    describe("Testing de adopción: ", () => {
        //Caso exitoso
        it("Endpoint POST /api/adoptions debe crear una adopción correctamente", async() =>
        {
            const adopMock = {
                uid: "6714314e583a3d70492105d8",
                pid: "6714314e583a3d70492105e4"
            }

            const {statusCode, ok, _body} = await requester.post("/api/adoptions").send(adopMock);

            console.log(statusCode);
            console.log(ok);
            console.log(_body);

            //expect(body.status).to.have.property("success");
        })

        it("Endpoint GET /api/adoptions debe mostrar todas las adopciones correctamente", async() =>
        {
            const {statusCode, _body} = await requester.get("/api/adoptions");

            console.log(statusCode);
            console.log(_body);
            
            expect(statusCode).to.equal(200);
        })

        it("Endpoint GET /api/adoptions debe mostrar una adopcion por ID correctamente", async() =>
        {
            const idMock = {
                aid: "6732be1013e96d3c2446b0f4"
            }

            const {statusCode, _body} = await requester.get("/api/adoptions").send(idMock);

            console.log(statusCode);
            console.log(_body);

            expect(statusCode).to.equal(200);
        })
    })
})