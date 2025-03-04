function MailBox(){
    
    let unReadMessages = ["Message -1", "Message -2", "Message -3", "Message -4", "Message -5"];

    return(
        <div>
            <h2>Mail Box</h2>   
            {
                unReadMessages.length > 0 &&
                <h3>You have {unReadMessages.length} unread messages in your mai box.</h3>
            }
        </div>
    )   
}

export default MailBox;