import React from 'react'

export default function SolutionSupPagetemplate() {

    const renderInformation = () => {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-5/6 h-5/6 p-6 bg-white rounded-lg shadow-lg animate-slide-in">
          
              <div className="text-center text-lg font-semibold text-gray-800">
                Your content here
              </div>
            </div>
          </div>
        );
      };

  return (
    <>{renderInformation()}</>
  )
}
