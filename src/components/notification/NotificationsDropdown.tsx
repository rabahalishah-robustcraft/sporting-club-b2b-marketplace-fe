import { NotificationItem } from "./NotificationItem";

export const NotificationsDropdown = () => {
  return (
    <div className="absolute top-16 right-0 w-2xl bg-white rounded-lg shadow-xl p-4 z-50 transition-transform origin-top-right scale-100 animate-fade-in-up">
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      <div className="flex flex-col space-y-4">
        <NotificationItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#D7B96C" />
              <g clip-path="url(#clip0_8278_199)">
                <path
                  d="M20.8334 27.4999H27.5M27.645 15.6766C28.0856 15.2361 28.3332 14.6386 28.3333 14.0156C28.3333 13.3926 28.0859 12.7951 27.6454 12.3545C27.205 11.9139 26.6075 11.6663 25.9845 11.6663C25.3615 11.6662 24.764 11.9136 24.3234 12.3541L13.2017 23.4782C13.0082 23.6712 12.8651 23.9087 12.785 24.1699L11.6842 27.7966C11.6627 27.8686 11.661 27.9452 11.6795 28.0181C11.6979 28.091 11.7358 28.1576 11.789 28.2107C11.8423 28.2639 11.9089 28.3016 11.9818 28.32C12.0548 28.3383 12.1313 28.3366 12.2034 28.3149L15.8309 27.2149C16.0918 27.1355 16.3293 26.9933 16.5225 26.8007L27.645 15.6766Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8278_199">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          title="Offer Negotiation"
          message="You are currently negotiating a deal with [Business Name/Category] for your [Category] listing."
          bgColor="bg-green-50"
        />
        <NotificationItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#173D35" />
              <path
                d="M20 11.6667V28.3334M24.1667 14.1667H17.9167C17.1431 14.1667 16.4013 14.474 15.8543 15.021C15.3073 15.568 15 16.3099 15 17.0834C15 17.857 15.3073 18.5988 15.8543 19.1458C16.4013 19.6928 17.1431 20.0001 17.9167 20.0001H22.0833C22.8569 20.0001 23.5987 20.3074 24.1457 20.8544C24.6927 21.4013 25 22.1432 25 22.9167C25 23.6903 24.6927 24.4322 24.1457 24.9791C23.5987 25.5261 22.8569 25.8334 22.0833 25.8334H15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="New Offer!"
          message="[Business Name/Category] has submitted an offer for your [Category] opportunity."
          bgColor="bg-green-50"
        />
        <NotificationItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#22C55E" />
              <path
                d="M26.6667 15L17.5 24.1667L13.3334 20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          title="Offer Accepted"
          message="You have accepted the offer from [Business Name/Category]."
          bgColor="bg-green-50"
        />
        <NotificationItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#3B82F6" />
              <g clip-path="url(#clip0_8278_868)">
                <path
                  d="M12.4933 23.6184C12.6158 23.9275 12.6431 24.2662 12.5716 24.5909L11.6841 27.3326C11.6555 27.4716 11.6629 27.6156 11.7056 27.751C11.7483 27.8864 11.8248 28.0086 11.928 28.1061C12.0312 28.2036 12.1575 28.2732 12.2951 28.3081C12.4327 28.3431 12.5769 28.3423 12.7141 28.3059L15.5583 27.4742C15.8647 27.4135 16.1821 27.44 16.4741 27.5509C18.2536 28.3819 20.2694 28.5577 22.1659 28.0473C24.0624 27.5369 25.7177 26.3731 26.8397 24.7612C27.9617 23.1493 28.4784 21.1929 28.2985 19.2372C28.1187 17.2815 27.2539 15.4521 25.8567 14.0719C24.4595 12.6917 22.6197 11.8493 20.6619 11.6933C18.7042 11.5374 16.7542 12.0779 15.1561 13.2195C13.5581 14.3611 12.4146 16.0305 11.9274 17.9331C11.4402 19.8357 11.6406 21.8492 12.4933 23.6184Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8278_868">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          title="You have a new message."
          message="[Business Name/Category] has a question about your listing."
          bgColor="bg-green-50"
        />
      </div>
    </div>
  );
};
