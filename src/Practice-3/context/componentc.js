import { Usercontext, ChannelContext } from "../../App";

function Componentc() {
  return (
    <>
      <Usercontext.Consumer>
        {(username) => {
          return (
            <>
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <>
                      user context value:{username} channel context value:{" "}
                      {channel}
                    </>
                  );
                }}
              </ChannelContext.Consumer>
            </>
          );
        }}
      </Usercontext.Consumer>
    </>
  );
}
export default Componentc;
