enum FETCH_STATUS  
{
    IDLE = "IDLE",
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"

}

export type FETCH_STATUS_TYPE = keyof typeof FETCH_STATUS;

export { FETCH_STATUS };
