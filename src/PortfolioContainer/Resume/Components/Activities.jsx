import React from 'react'

const Activities = ({ACTIVITIES}) =>
{
    return (

        <div className="flex flex-col h-[550px]" id="Activities">
            <h1 className='font-bold text-2xl my-3 self-center'>Activities</h1>
            <div className='h-[480px] overflow-auto'>
                {ACTIVITIES.map((activity) =>
                (
                    <div key={activity.id} className='my-4 bg-lightIndigo p-3 rounded-xl font-semibold'>
                        <h2>{activity.activityname}.</h2>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Activities
