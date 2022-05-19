import Ajv, {JSONSchemaType} from "ajv/dist/ajv";
import ajvErrors from "ajv-errors";
import {IUserAJV} from "../interfaces/IUser";


const ajv: Ajv = new Ajv({allErrors: true})
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

ajvErrors(ajv)

ajv.addFormat('email',emailRegex)

const userSchema: JSONSchemaType<IUserAJV> = {
    type: "object",
    properties: {
        first_name: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: "First name is missing"
            }

        },
        last_name: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: "Last name is missing"
            }
        },
        email:{
            type: 'string',
            format: 'email',
            errorMessage:{
                format: "Invalid email format"
            }
        },
        password:{
            type:'string',
            minLength: 5,
            errorMessage:{
                minLength: "Password must be minimum 5 characters"
            }
        },
        confirm_password:{
            type:'string',
        }
    },
    required: ['first_name','last_name','email','password']


}



export const validateNewUser = ajv.compile(userSchema)