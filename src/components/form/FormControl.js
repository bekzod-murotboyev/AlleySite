import FormUser from "./FormUser";
import FormUniversity from "./FormUniversity";
import FormWriter from "./FormWriter";

function FormControl({type}) {

    return (
        <div className="card">
            <div className="card-header">
                <h4>Add {type}</h4>
            </div>
            <div className="card-body">
                {
                    type === 'User' ? <FormUser/> : type === 'University' ?<FormUniversity/>:
                        type==='Writer'? <FormWriter/> :''
                }
            </div>
        </div>
    )
}

export default FormControl