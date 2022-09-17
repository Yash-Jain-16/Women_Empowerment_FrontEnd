export interface NGO
{
    ngo_Id : number;
    user_Id : number;
    point_of_Contact  : string;
    ngo_Email : string;
    contact : string;
    telephone : string;
    address : string;
    state : string;
    city : string;
    pincode : string;
    identity_Proof : string;
    identity_Proof_Image : File;
    date_of_Register : Date;
    reg_Paper : File;
    is_Aprooved : number;
    is_Active : number;
    ngo_Name : string;
}