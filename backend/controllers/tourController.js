import Tour from '../models/Tour.js'

//creaate new tour 
export const createTour = async (req, res) => {

    console.log('hello i am create tour')
    const newTour = new Tour(req.body);

    try {
        const saveTour = await newTour.save();
        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: saveTour
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Faild to create. trye again " });
    }
};


//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {

        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }
            , { new: true })
        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedTour
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "fail to updated",
        });
    }
}



// delete tours
export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to delete",
        });
    }
}

// getSingle tours
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    //.populate("review")
    try {
        const tour = await Tour.findById(id).populate('reviews');
        res.status(200).json({
            success: true,
            message: "Successfully getsingletour",
            data: tour
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
}

// export const getAllTour = async (req, res) => {
//     // for pagination
//     const page = parseInt(req.query.page)
//     console.log(page)
//     try {
//         const tours = await Tour.find({})
//         .populate('review')
//         .skip(page* 8)
//         .limit(8);
//         res.status(200).json({
//             success: true,
//             count: tours.length,
//             message: "Successfully getAlltour",
//             data: tours
//         });
//     } catch (error) {
//         res.status(404).json({
//             success: false,
//             message: "tour not found",
//         });
//     }
// };

export const getAllTour = async (req, res) => {
    // for pagination
    const page = parseInt(req.query.page) || 1; // Set a default value of 1 if page is not provided
    const limit = 8;
    const skip = (page - 1) * limit;

    try {
        const tours = await Tour.find({})
        .populate('reviews') // Updated to 'reviews' to match the updated schema
        .skip(skip)
        .limit(limit);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully retrieved all tours",
            data: tours
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(404).json({
            success: false,
            message: "Tour not found",
        });
    }
};




//get tour by search

export const getTourBySearch = async (req, res) => {
    // Correction: 'i' means case-insensitive
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    // Basic input validation
    // if (isNaN(distance) || isNaN(maxGroupSize)) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Invalid distance or maxGroupSize",
    //     });
    // }

    console.log(distance, maxGroupSize);
    try {
        // Using gte for numeric comparison
        const tours= await Tour.find({city,distance: { $gte: distance },maxGroupSize: { $gte: maxGroupSize }}).populate('reviews');
        res.status(200).json({
            success: true,
            message: "Successfully retrieved tours",
            data:tours,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(404).json({
            success: false,
            message: "Tours not found",
        });
    }
};


//get feature tours
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tours
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};



//get tour count
export const getTourCount=async(req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount();
        res.status(200).json({
            success:true,
            data:tourCount
        })
    } catch (error) {
        res.status(500).json({success:false , message:"failed to featch"})
    }
}