import Link from "next/link";

const Trustpilot = () => {
  return (
    <>
      <section
        id="trustpilot"
        className="overflow-hidden bg-secondary p-5 lg:p-16"
      >
        <div className="mx-auto max-w-7xl bg-secondary">
          <div className="flex w-full shrink-0 flex-col items-center justify-center gap-7 rounded-xl bg-primary p-8 md:p-4 lg:p-16">
            <div className="text-center text-xl font-bold lg:text-3xl">
              Your Unbeatable Gaming Companion
            </div>
            <div className="text-center text-gray-300">
            &quot;<i>Amazing! They truly believe in proving amazing but still affordable services that are all the highest of quality. <br></br> I will always be with Lodestone and refer them to anyone and everyone I know.</i>&quot;
            </div>
            <Link href="https://trustpilot.com/review/lodestone.host">
              <div className="subheader-text flex flex-row flex-wrap justify-center gap-2.5 text-center text-base">
                <p className="mb-0 font-medium">Excellent</p>
                <p className="mb-0 font-bold">4.5/5.0</p>
                <p className="mb-0">
                  <svg
                    viewBox="0 0 128 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="128px"
                    height="24px"
                    className="rounded-xl"
                  >
                    <path
                      fill="#00b67a"
                      d="M0 0h24v24H0V0Zm26 0h24v24H26V0Zm26 0h24v24H52V0Zm26 0h24v24H78V0Zm26 0h24v24h-24V0Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="m12 16.2 3.6-1 1.6 4.8-5.2-3.8Zm8.4-6.1H14l-2-6-2 6H3.6l5.2 3.8-2 6 5.2-3.7 3.2-2.3 5.2-3.8Zm17.6 6 3.6-.9 1.6 4.8-5.2-3.8Zm8.4-6H40l-2-6-2 6h-6.4l5.2 3.8-2 6 5.2-3.7 3.2-2.3 5.2-3.8Zm17.6 6 3.6-.9 1.6 4.8-5.2-3.8Zm8.4-6H66l-2-6-2 6h-6.4l5.2 3.8-2 6 5.2-3.7 3.2-2.3 5.2-3.8Zm17.6 6 3.6-.9 1.6 4.8-5.2-3.8Zm8.4-6H92l-2-6-2 6h-6.4l5.2 3.8-2 6 5.2-3.7 3.2-2.3 5.2-3.8Zm17.6 6 3.6-.9 1.6 4.8-5.2-3.8Zm8.4-6H118l-2-6-2 6h-6.4l5.2 3.8-2 6 5.2-3.7 3.2-2.3 5.2-3.8Z"
                    ></path>
                    <path
                      fill="#D9D9D9"
                      d="M115.5 4V0H128v24h-12.5V4Z"
                      style={{ mixBlendMode: "lighten" }}
                    ></path>
                  </svg>
                </p>
                <p className="mb-0">
                  <svg
                    viewBox="0 0 104 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="103px"
                    height="24px"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.089 1.96c-.38 1.112-1.029 3.015-1.442 4.23l-.75 2.208-4.699.02-4.698.02 3.755 2.606c2.066 1.433 3.77 2.63 3.789 2.657.018.029-.615 1.95-1.408 4.27-.792 2.32-1.431 4.228-1.42 4.239.012.011 1.718-1.155 3.792-2.591 2.074-1.437 3.792-2.611 3.82-2.61.026.002 1.732 1.173 3.792 2.604 2.06 1.43 3.756 2.591 3.77 2.579.023-.02-1.191-3.66-2.504-7.507-.183-.537-.317-.99-.297-1.008.02-.017 1.65-1.147 3.62-2.51 1.971-1.364 3.65-2.536 3.733-2.604.138-.115-.206-.128-4.536-.163l-4.685-.039-1.41-4.15C13.533 1.93 12.872.036 12.84.002c-.033-.034-.371.848-.751 1.96Zm15.418 7.381.023.942 2.033.02 2.033.02v10.372h2.255V10.321h4.106V8.4H27.485l.023.941Zm52.902 0 .022.942 1.027.021 1.026.022V8.4h-2.098l.023.941Zm3.927 5.207v6.147h2.094V8.4h-2.094v6.148Zm-20.049-4.114v1.342l-.785.022-.785.022v1.46l.78.022.78.022.025 3.09c.028 3.41.025 3.388.548 3.875.146.135.43.3.633.365.469.153 1.512.22 2.186.141l.523-.061V19.211l-.61.017c-.335.01-.702-.024-.816-.073-.396-.173-.415-.302-.45-3.164l-.032-2.668.954-.021.954-.022v-1.46l-.946-.022-.946-.022V9.092h-2.013v1.342Zm35.268 0v1.347h-1.53v1.537h1.521l.024 3.055c.027 3.378.029 3.387.566 3.917.399.394.905.52 2.076.517.553-.002 1.07-.026 1.147-.055.121-.044.141-.158.141-.805v-.753l-.606.03c-.694.033-1.022-.065-1.155-.343-.062-.13-.091-1.044-.091-2.874v-2.684l.906-.021.906-.022v-1.46l-.904-.022-.904-.022-.022-1.323-.022-1.323-1.027-.022-1.026-.021v1.347ZM41.54 11.658c-.729.22-1.402.718-1.824 1.349l-.229.341V11.781h-2.013v8.914h2.094v-2.247c0-2.492.049-2.937.39-3.623.285-.572.648-.933 1.18-1.174.34-.154.515-.18 1.127-.17l.725.013.023-.908c.017-.675-.004-.924-.08-.97-.157-.095-1.027-.068-1.392.042Zm15.199.008c-1.267.219-2.3.927-2.556 1.751-.255.818-.09 1.65.442 2.227.574.622 1.177.864 3.22 1.29 1.76.368 2.306.721 2.229 1.442-.073.682-.671.975-1.987.974-.746-.002-.893-.025-1.248-.198-.412-.2-.735-.562-.814-.911a4.48 4.48 0 0 0-.076-.293c-.023-.07-.31-.096-1.078-.096h-1.048l.05.365c.226 1.652 1.523 2.61 3.731 2.758 1.913.127 3.72-.626 4.326-1.806.194-.375.223-.52.217-1.086-.008-.748-.128-1.074-.567-1.537-.541-.572-1.15-.813-3.094-1.227-.64-.136-1.337-.318-1.548-.404-.485-.198-.783-.527-.783-.862 0-.603.715-.934 1.885-.872.891.046 1.289.243 1.524.755l.174.378 1.077.001 1.078.002-.049-.286c-.082-.483-.514-1.22-.912-1.553-.95-.798-2.519-1.102-4.193-.813Zm16.759.01c-.638.144-1.286.52-1.619.937l-.265.333V11.78h-2.013V24h2.094v-4.406l.302.31c.578.591 1.311.917 2.308 1.026 2.116.23 3.752-.893 4.368-3.001.113-.387.145-.768.142-1.69-.003-1.083-.023-1.248-.22-1.813-.751-2.159-2.808-3.269-5.097-2.75Zm18.005-.006c-2.269.465-3.664 2.414-3.518 4.914.17 2.904 2.377 4.692 5.358 4.339 1.856-.22 3.153-1.212 3.77-2.882.212-.572.226-.688.222-1.803-.004-1.08-.023-1.242-.212-1.747-.289-.77-.578-1.215-1.12-1.723-1.071-1.005-2.844-1.437-4.5-1.098Zm-47.265 3.326c0 2.972.012 3.262.162 3.824.354 1.326 1.138 1.938 2.707 2.11 1.165.129 2.194-.206 2.883-.937l.367-.39v1.092h2.094v-8.914h-2.085l-.026 3.016c-.024 2.665-.043 3.057-.17 3.362-.287.698-.955 1.147-1.802 1.212-1.01.078-1.668-.287-1.907-1.054-.11-.352-.13-.888-.13-3.476v-3.06h-2.093v3.215Zm36.207-3.164c-.03.029-.054 2.034-.054 4.458v4.405h2.093v-8.914h-.993c-.546 0-1.017.023-1.046.051Zm-5.112 1.583c.934.523 1.435 1.534 1.435 2.9 0 1.804-.857 2.926-2.332 3.053-1.731.15-2.976-1.423-2.78-3.514.095-1.014.521-1.922 1.082-2.303.44-.299.81-.386 1.54-.363.576.019.75.056 1.055.227Zm18.208-.128c.784.255 1.44 1.058 1.668 2.041.145.626.064 1.831-.16 2.39-.255.638-.712 1.154-1.243 1.401-1.44.673-2.987.002-3.543-1.536-.208-.574-.254-1.656-.098-2.288.241-.978.655-1.524 1.436-1.896.4-.191.59-.234 1.028-.234.294 0 .705.055.912.122Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trustpilot;
