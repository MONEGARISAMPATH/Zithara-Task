const router= require('express').Router();
const customerController=require('../controllers/customerController');

router.get("/",customerController.getAllCustomers);

router.get("/:id",customerController.getCustomerById);

router.get("/search/:query",customerController.getCustomersBySearchParams);

router.get("/byName/:name",customerController.getCustomerByName);

router.get("/byLocation/:location",customerController.getCustomersByLocation);

router.post("/",customerController.createCustomer);

router.put("/:id",customerController.updateCustomer);

router.delete("/:id",customerController.deleteCustomer);


module.exports=router;