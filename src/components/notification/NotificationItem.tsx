export const NotificationItem = ({ icon, title, message, bgColor }) => {
  return (
    <div className={`flex items-start space-x-4 p-3 rounded-lg ${bgColor}`}>
      <div className="p-2 rounded-full flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};
