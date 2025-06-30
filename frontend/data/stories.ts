export type StortItemType = {
    id: string
    storyId: string
    sourceUrl: string
}

export type IStories = {
    id: string,
    previewImage: string,
    items: StortItemType[]
}

export const stories = [
    {
        previewImage: '/stories/story-1.jpg',
        id: 'story-1',
        items: [{
            id: 'story-item-1',
            storyId: 'story-1',
            sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
        }]
    },
    {
        previewImage: '/stories/story-2.jpg',
        id: 'story-2',
        items: [{
            id: 'story-item-2',
            storyId: 'story-2',
            sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
        },
            {
                id: 'story-item-7',
                storyId: 'story-2',
                sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
            }
        ]
    },
    {
        previewImage: '/stories/story-3.jpg',
        id: 'story-3',
        items: [{
            id: 'story-item-3',
            storyId: 'story-3',
            sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
        }]
    },
    {
        previewImage: '/stories/story-4.jpg',
        id: 'story-4',
        items: [{
            id: 'story-item-4',
            storyId: 'story-4',
            sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
        }]
    },
    {
        previewImage: '/stories/story-5.jpg',
        id: 'story-5',
        items: [{
            id: 'story-item-5',
            storyId: 'story-5',
            sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
        }]
    },
    {
        previewImage: '/stories/story-6.jpg',
        id: 'story-6',
        items: [{
            id: 'story-item-6',
            storyId: 'story-6',
            sourceUrl: 'https://gmyn.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2025-04-16-at-19.58.36-1024x839.jpeg'
        }]
    },
]