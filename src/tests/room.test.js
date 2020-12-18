import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import room from "../controllers/room";
const { expect } = chai;
chai.use(chaiHttp);
// create a blog
describe("When the Admin try to create a Room --/rooms", () => {
  it("should return the Array of created room ", (done) => {
    chai
      .request(app)
      .post("/rooms")
      .send({
        hotelId: "005",
        description: "Room for underGround",
        roomType: "First class",
        roomLabel: "label 001",
        status: "double",
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
describe("Get All Rooms", () => {
     it("should return an array of the all Rooms", (done) => {
      chai
        .request(app)
        .get("/rooms")
        .end((err, res) => {
          if (err) done(err);
          expect(res).to.have.status(200);    
          done();
        });
    });
  });
describe("Get Specific Room", () => {
  const idroom = 13;
  it("should return selected room", (done) => {
    chai
      .request(app)
      .get(`/rooms/${idroom}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
  describe("Room Endpoints", () => {
      const idroom = 13;
    it("should update a Room", (done) => {
      chai
        .request(app)
        .put(`/rooms/${idroom}`)
        .send({
          hotelId: "001",
          description: "Room for VIP",
          roomType: "first class",
          roomLabel: "label 001",
          status: "double",
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
describe(" Room endpoint --/rooms/id" ,() => {
    const idroom = 13;
 it("should return selected room", (done) => {
    chai
      .request(app)
      .delete(`/rooms/${idroom}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});