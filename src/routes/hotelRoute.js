import { Router } from 'express';
import {
  getAllHotels, createHotel, deleteHotel, getHotel, getHotelRooms, updateHotel
} from '../controllers/hotelController';
import protection from '../middlewares/check-auth';

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Barefoot Nomad'));

/**
 * @swagger
 *
 * /hotels:
 *    post:
 *      summary: add a hotel
 *      tags: [Hotels]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/hotel'
 *      responses:
 *        "201":
 *          description: Article schema
 *
 * components:
 *    schemas:
 *      hotel:
 *        type: object
 *        required:
 *          - hotelName
 *          - pricerange
 *          - location
 *          - ranking
 *          - parking
 *          - wifi
 *          - swimmingpool
 *          - breakfast
 *          - rooms
 *          - images
 *          - hotelemail
 *        properties:
 *          hotelName:
 *            type: string
 *          pricerange:
 *              type: string
 *          location:
 *              type: string
 *          ranking:
 *              type: string
 *          parking:
 *              type: string
 *          wifi:
 *              type: string
 *          swimmingpool:
 *              type: string
 *          breakfast:
 *              type: string
 *          rooms:
 *              type: string
 *          images:
 *              type: string
 *          hotelemail:
 *              type: string
 *
 *
 *
 */

router.post('/', protection, createHotel);

/**
 * @swagger
 * /hotels:
 *  get:
 *    tags: [Hotels]
 *    summary: All hotels from database
 *    description: Hotels are desplayed from DB
 *    responses:
 *      '200':
 *        description: Hotels are desplayed succesffuly.
 *
*/

router.get('/', getAllHotels);

/**
 * @swagger
 * /hotels/{id}:
 *    delete:
 *      tags: [Hotels]
 *      summary: Authenticated user can delete a hotel
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/requests'
 *      responses:
 *        "200":
 *          description: A hotel schema
 *
 * components:
 *    schemas:
 *      hotel:
 *        type: object
 *        required:
 *          - hotelName
 *          - pricerange
 *          - location
 *          - ranking
 *          - parking
 *          - wifi
 *          - swimmingpool
 *          - breakfast
 *          - rooms
 *          - images
 *          - hotelemail
 *        properties:
 *          hotelName:
 *            type: string
 *          pricerange:
 *              type: string
 *          location:
 *              type: string
 *          ranking:
 *              type: string
 *          parking:
 *              type: string
 *          wifi:
 *              type: string
 *          swimmingpool:
 *              type: string
 *          breakfast:
 *              type: string
 *          rooms:
 *              type: string
 *          images:
 *              type: string
 *          hotelemail:
 *              type: string
 */

router.delete('/:id', protection, deleteHotel);

/**
 * @swagger
 * /hotels/{id}:
 *   get:
 *     summary: For getting a single hotel
 *     tags: [Hotels]
 *
 *     description: Returns a single hotel
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Particular hotel Object's ID (Automatically assigned by database)
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A single hotel
 *       500:
 *         description: Server Error
 */

router.get('/:id', protection, getHotel);

/**
 * @swagger
 * /hotels/{id}:
 *    patch:
 *      tags: [Hotels]
 *      summary: Authenticated user can update a hotel
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/requests'
 *      responses:
 *        "200":
 *          description: A hotel schema
 *
  * components:
 *    schemas:
 *      hotel:
 *        type: object
 *        required:
 *          - hotelName
 *          - pricerange
 *          - location
 *          - ranking
 *          - parking
 *          - wifi
 *          - swimmingpool
 *          - breakfast
 *          - rooms
 *          - images
 *          - hotelemail
 *        properties:
 *          hotelName:
 *            type: string
 *          pricerange:
 *              type: string
 *          location:
 *              type: string
 *          ranking:
 *              type: string
 *          parking:
 *              type: string
 *          wifi:
 *              type: string
 *          swimmingpool:
 *              type: string
 *          breakfast:
 *              type: string
 *          rooms:
 *              type: string
 *          images:
 *              type: string
 *          hotelemail:
 *              type: string
 */
router.patch('/:id', protection, updateHotel);

export default router;
