// Sample events data for college students
const sampleEvents = [
    {
        id: 3,
        title: "Pickup Basketball",
        date: getTomorrowDate(),
        time: "18:00",
        location: "Student Recreation Center",
        limit: 10,
        description: "Pickup basketball game. All skill levels welcome! Meet at the main court.",
        attendees: ["Jake", "Marcus", "Tyler", "Jordan"],
        icon: "🏀",
        creator: "Jake"
    },
    {
        id: 5,
        title: "Hiking Trail",
        date: getCurrentWeekDate(6), // Saturday
        time: "08:00",
        location: "Riverside Park Trail",
        limit: 12,
        description: "Morning hike at the local park! Bring water and good shoes. Easy 3-mile trail.",
        attendees: ["Alex", "Maya", "Chris", "You"],
        icon: "🥾",
        creator: "Alex",
        messages: [
            {
                id: 6,
                sender: "Alex",
                text: "Good morning everyone! The weather looks perfect for our hike today. Meet at the trailhead at 8 AM sharp!",
                timestamp: new Date(getDemoTime().getTime() - 1 * 60 * 60 * 1000), // 1 hour ago
                isHost: true
            },
            {
                id: 7,
                sender: "Maya",
                text: "I'm so excited! I've been looking forward to this all week. Should I bring extra water?",
                timestamp: new Date(getDemoTime().getTime() - 45 * 60 * 1000), // 45 minutes ago
                isHost: false
            },
            {
                id: 8,
                sender: "You",
                text: "I'll be there! Bringing my camera for some nature shots. See you all soon!",
                timestamp: new Date(getDemoTime().getTime() - 30 * 60 * 1000), // 30 minutes ago
                isHost: false
            }
        ]
    },
    {
        id: 6,
        title: "Game Night",
        date: getCurrentWeekNextDate(0), // Next Sunday
        time: "19:30",
        location: "Dorm Common Room",
        limit: 8,
        description: "Board games and snacks! We have Cards Against Humanity, Settlers of Catan, and more!",
        attendees: ["Jordan", "Taylor", "Sam", "Casey", "You"],
        icon: "🎲",
        creator: "Jordan",
        messages: [
            {
                id: 3,
                sender: "You",
                text: "Game night is happening tonight! I've got snacks and drinks ready. See you all at 7:30!",
                timestamp: new Date(getDemoTime().getTime() - 4 * 60 * 60 * 1000), // 4 hours ago
                isHost: true
            },
            {
                id: 4,
                sender: "Jordan",
                text: "Can't wait! What games are we playing?",
                timestamp: new Date(getDemoTime().getTime() - 3.5 * 60 * 60 * 1000), // 3.5 hours ago
                isHost: false
            },
            {
                id: 5,
                sender: "Taylor",
                text: "I'm bringing my favorite card game too!",
                timestamp: new Date(getDemoTime().getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
                isHost: false
            }
        ]
    },
    {
        id: 7,
        title: "Tennis Doubles",
        date: getCurrentWeekNextDate(3), // Next Wednesday
        time: "17:00",
        location: "Campus Tennis Courts",
        limit: 4,
        description: "Tennis doubles match! All skill levels welcome. We have extra rackets.",
        attendees: ["Ryan", "Jessica"],
        icon: "🎾",
        creator: "Ryan"
    },
    {
        id: 8,
        title: "Movie Night",
        date: getCurrentWeekDate(5), // Friday
        time: "20:00",
        location: "Student Union Theater",
        limit: 20,
        description: "Free movie screening! This week: The latest blockbuster. Popcorn provided!",
        attendees: ["Mike", "Sarah", "Alex", "Emma", "David", "Taylor"],
        icon: "🎬",
        creator: "Mike"
    },
    {
        id: 9,
        title: "Art Museum Visit",
        date: getCurrentWeekNextDate(1), // Next Monday
        time: "14:00",
        location: "City Art Museum",
        limit: 15,
        description: "Free student admission! Meet at the museum entrance. Great way to explore local culture!",
        attendees: ["Sophia", "Marcus", "Jessica", "Chris"],
        icon: "🏛️",
        creator: "Sophia"
    },
    {
        id: 10,
        title: "Poker Night",
        date: getCurrentWeekNextDate(5), // Next Friday
        time: "20:00",
        location: "Off-Campus House",
        limit: 6,
        description: "Poker night at my place! Bring snacks and drinks. No money, just for fun!",
        attendees: ["Tyler", "Jordan", "Sam"],
        icon: "🃏",
        creator: "Tyler"
    },
    {
        id: 11,
        title: "Volleyball Tournament",
        date: getCurrentWeekNextDate(2), // Next Tuesday
        time: "19:30",
        location: "Student Recreation Center",
        limit: 12,
        description: "Volleyball tournament! Teams will be formed on the spot. Prizes for winners!",
        attendees: ["Marcus", "Taylor", "Casey", "Ryan"],
        icon: "🏐",
        creator: "Marcus"
    },
    {
        id: 12,
        title: "Food Truck Festival",
        date: getCurrentWeekNextDate(6), // Next Saturday
        time: "12:00",
        location: "Downtown Food Truck Park",
        limit: 15,
        description: "Food truck festival downtown! Try different cuisines and hang out. Meet at the main entrance.",
        attendees: ["Emma", "David", "Maya", "Jessica"],
        icon: "🍔",
        creator: "Emma"
    },
    {
        id: 13,
        title: "Photography Walk",
        date: getCurrentWeekNextDate(4), // Next Thursday
        time: "16:00",
        location: "Campus Gardens",
        limit: 8,
        description: "Photography walk around campus! Bring your camera or phone. Great for beginners!",
        attendees: ["Alex", "Sophia", "Chris"],
        icon: "📸",
        creator: "Alex"
    },
    {
        id: 14,
        title: "Trivia Night",
        date: getCurrentWeekNextDate(3), // Next Wednesday
        time: "19:00",
        location: "Campus Pub",
        limit: 20,
        description: "Weekly trivia night at the campus pub! Form teams and compete for prizes!",
        attendees: ["Mike", "Sarah", "Taylor", "Sam", "Casey", "Ryan", "You"],
        icon: "🧠",
        creator: "Mike"
    },
    {
        id: 15,
        title: "Beach Volleyball",
        date: getCurrentWeekNextDate(0), // Next Sunday
        time: "15:00",
        location: "City Beach",
        limit: 8,
        description: "Beach volleyball at the city beach! Bring sunscreen and water. All skill levels welcome!",
        attendees: ["Jordan", "Tyler", "Marcus"],
        icon: "🏖️",
        creator: "Jordan"
    },
    {
        id: 16,
        title: "Concert at Local Venue",
        date: getCurrentWeekNextDate(5), // Next Friday
        time: "21:00",
        location: "Downtown Music Hall",
        limit: 10,
        description: "Local band concert! Student discount available. Meet at the venue entrance.",
        attendees: ["David", "Maya", "Jessica", "Chris"],
        icon: "🎵",
        creator: "David"
    },
    {
        id: 17,
        title: "Game Night",
        date: getTodayDate(),
        time: "18:30", // 6:30 PM today
        location: "Student Union Game Room",
        limit: 12,
        description: "Board games, card games, and video games! Bring your favorite games or try new ones. Snacks provided!",
        attendees: ["Sophia", "Maya", "Chris"],
        icon: "🎲",
        creator: "Sophia"
    },
    {
        id: 19,
        title: "Early Morning Run",
        date: getTomorrowDate(),
        time: "06:30", // 6:30 AM tomorrow
        location: "Campus Track",
        limit: 8,
        description: "Start your Friday with energy! 3-mile run around campus. All paces welcome.",
        attendees: ["Jake", "Marcus", "Tyler"],
        icon: "🏃",
        creator: "Jake"
    },
    {
        id: 21,
        title: "Pickleball",
        date: getTodayDate(),
        time: "16:00", // 4:00 PM today (Thursday)
        location: "Student Recreation Center - Court 2",
        limit: 8,
        description: "Pickleball game at the rec center! All skill levels welcome. Paddles provided!",
        attendees: ["Mike", "Alex"],
        icon: "🏓",
        creator: "Mike"
    },
    {
        id: 22,
        title: "Movie Night - Inception",
        date: getTodayDate(),
        time: "19:00", // 7:00 PM today (Thursday)
        location: "Student Union Theater",
        limit: 15,
        description: "Watching Inception! Mind-bending thriller that will blow your mind. Popcorn and drinks provided!",
        attendees: ["Sarah", "Emma", "David"],
        icon: "🎬",
        creator: "Sarah"
    },
    {
        id: 23,
        title: "College Football Watch Party",
        date: getTomorrowDate(),
        time: "19:30", // 7:30 PM Friday
        location: "Campus Sports Bar",
        limit: 20,
        description: "Watch the big game together! Food and drinks available. Come cheer for our team!",
        attendees: ["Jake", "Marcus", "Tyler", "Jordan"],
        icon: "🏈",
        creator: "Jake"
    }
];

// Helper functions for dates - Fixed for October 23rd, 2025 demo
function getTodayDate() {
    // Demo is set for Thursday, October 23rd, 2025
    return "2025-10-23";
}

function getTomorrowDate() {
    // Friday, October 24th, 2025
    return "2025-10-24";
}

function getDateInDays(days) {
    const baseDate = new Date("2025-10-23");
    baseDate.setDate(baseDate.getDate() + days);
    return baseDate.toISOString().split('T')[0];
}

// Week-based date functions - Fixed for October 23rd, 2025 week
function getThisWeekDate(dayOfWeek) {
    // dayOfWeek: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
    // Week of October 19-25, 2025 (October 23rd is Thursday)
    const weekDates = {
        0: "2025-10-19", // Sunday
        1: "2025-10-20", // Monday
        2: "2025-10-21", // Tuesday
        3: "2025-10-22", // Wednesday
        4: "2025-10-23", // Thursday
        5: "2025-10-24", // Friday
        6: "2025-10-25"  // Saturday
    };
    return weekDates[dayOfWeek];
}

function getNextWeekDate(dayOfWeek) {
    // Get the same day next week (October 26 - November 1, 2025)
    const nextWeekDates = {
        0: "2025-10-26", // Sunday
        1: "2025-10-27", // Monday
        2: "2025-10-28", // Tuesday
        3: "2025-10-29", // Wednesday
        4: "2025-10-30", // Thursday
        5: "2025-10-31", // Friday
        6: "2025-11-01"  // Saturday
    };
    return nextWeekDates[dayOfWeek];
}

// Fixed week-based date functions for October 23rd, 2025 demo
function getCurrentWeekDate(dayOfWeek) {
    // Returns the specified day of the current week (October 19-25, 2025)
    const weekDates = {
        0: "2025-10-19", // Sunday
        1: "2025-10-20", // Monday
        2: "2025-10-21", // Tuesday
        3: "2025-10-22", // Wednesday
        4: "2025-10-23", // Thursday
        5: "2025-10-24", // Friday
        6: "2025-10-25"  // Saturday
    };
    return weekDates[dayOfWeek];
}

function getCurrentWeekNextDate(dayOfWeek) {
    // Returns the specified day of next week (October 26 - November 1, 2025)
    const nextWeekDates = {
        0: "2025-10-26", // Sunday
        1: "2025-10-27", // Monday
        2: "2025-10-28", // Tuesday
        3: "2025-10-29", // Wednesday
        4: "2025-10-30", // Thursday
        5: "2025-10-31", // Friday
        6: "2025-11-01"  // Saturday
    };
    return nextWeekDates[dayOfWeek];
}

function getTimeInHours(hours) {
    const now = getDemoTime();
    now.setHours(now.getHours() + hours);
    return now.toTimeString().slice(0, 5);
}

// Current user
const currentUser = "You";

// Demo time function - returns demo time instead of real time
// Updated: Fixed date to Thursday, October 23rd, 2025
function getDemoTime() {
    // Demo is set for Thursday, October 23rd, 2025 at 2:00 PM
    return new Date("2025-10-23T14:00:00");
}

// Toast notification function
function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');
    
    // Set message and icon based on type
    toastMessage.textContent = message;
    
    // Remove existing type classes
    toast.classList.remove('success', 'error', 'warning');
    
    switch(type) {
        case 'success':
            toastIcon.className = 'toast-icon fas fa-check-circle';
            toast.classList.add('success');
            break;
        case 'error':
            toastIcon.className = 'toast-icon fas fa-exclamation-circle';
            toast.classList.add('error');
            break;
        case 'warning':
            toastIcon.className = 'toast-icon fas fa-exclamation-triangle';
            toast.classList.add('warning');
            break;
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Auto hide after duration
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// State management
let events = [...sampleEvents];
let currentEventId = null;
let searchQuery = '';
let currentFilter = 'all';
let currentSection = 'hangout-hub';
let currentMessagingEventId = null;

// DOM elements
const eventsList = document.getElementById('eventsList');
const myEventsList = document.getElementById('myEventsList');
const eventModal = document.getElementById('eventModal');
const addEventModal = document.getElementById('addEventModal');
const addEventBtn = document.getElementById('addEventBtn');
const closeModal = document.getElementById('closeModal');
const closeAddModal = document.getElementById('closeAddModal');
const addEventForm = document.getElementById('addEventForm');
const joinEventBtn = document.getElementById('joinEventBtn');
const cancelAddEvent = document.getElementById('cancelAddEvent');
const categorySelection = document.getElementById('categorySelection');
const eventDetailsForm = document.getElementById('eventDetailsForm');
const backToCategory = document.getElementById('backToCategory');
const searchEvents = document.getElementById('searchEvents');
const searchContainer = document.getElementById('searchContainer');
const searchIconBtn = document.getElementById('searchIconBtn');
const filterBtn = document.getElementById('filterBtn');
const filterContainer = document.getElementById('filterContainer');
// Profile elements are now handled dynamically

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter with "All Categories" selected
    const allFilterOption = document.querySelector('.filter-option[data-category="all"]');
    if (allFilterOption) {
        allFilterOption.classList.add('selected');
    }
    
    renderEvents();
    setupEventListeners();
    updateUnreadBadge(); // Initialize unread badge
    setupNewHangoutWindow(); // Initialize new hangout window
    
    // Initialize tour for first-time users
    initializeTour();
    
    // Test function for debugging
    window.testNavigation = function() {
        console.log('Testing navigation...');
        console.log('Current user:', currentUser);
        console.log('Events:', events);
        console.log('Attending events:', events.filter(event => 
            event.attendees.includes(currentUser) && event.creator !== currentUser
        ));
        console.log('Hosted events:', events.filter(event => 
            event.creator === currentUser
        ));
    };
});


// Setup event listeners
function setupEventListeners() {
    // Modal controls
    addEventBtn.addEventListener('click', () => {
        addEventModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        eventModal.classList.remove('show');
        // Navigate to hub section
        handleNavigation('hangout-hub');
    });

    closeAddModal.addEventListener('click', () => {
        addEventModal.classList.remove('show');
        // Reset search and show all categories
        document.getElementById('categorySearch').value = '';
        document.querySelectorAll('.category-group').forEach(group => {
            group.style.display = 'block';
            group.classList.remove('open');
            group.querySelectorAll('.subcategory-option').forEach(option => {
                option.style.display = 'flex';
            });
        });
    });

    // Badge modal close
    const closeBadgeModal = document.getElementById('closeBadgeModal');
    closeBadgeModal.addEventListener('click', () => {
        document.getElementById('badgeModal').classList.remove('show');
    });

    cancelAddEvent.addEventListener('click', () => {
        addEventModal.classList.remove('show');
        // Reset search and show all categories
        document.getElementById('categorySearch').value = '';
        document.querySelectorAll('.category-group').forEach(group => {
            group.style.display = 'block';
            group.classList.remove('open');
            group.querySelectorAll('.subcategory-option').forEach(option => {
                option.style.display = 'flex';
            });
        });
    });

    // Close modals when clicking outside
    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            eventModal.classList.remove('show');
            // Navigate to hub section
            handleNavigation('hangout-hub');
        }
    });

    addEventModal.addEventListener('click', (e) => {
        if (e.target === addEventModal) {
            addEventModal.classList.remove('show');
            // Reset search and show all categories
            document.getElementById('categorySearch').value = '';
            document.querySelectorAll('.category-group').forEach(group => {
                group.style.display = 'block';
                group.classList.remove('open');
                group.querySelectorAll('.subcategory-option').forEach(option => {
                    option.style.display = 'flex';
                });
            });
            // Reset unlimited attendees button
            document.getElementById('unlimitedAttendees').classList.remove('selected');
            document.getElementById('eventLimit').disabled = false;
            document.getElementById('decreaseLimit').disabled = false;
            document.getElementById('increaseLimit').disabled = false;
        }
    });

    // Badge modal click outside to close
    const badgeModal = document.getElementById('badgeModal');
    badgeModal.addEventListener('click', (e) => {
        if (e.target === badgeModal) {
            badgeModal.classList.remove('show');
        }
    });


    // Form submission
    addEventForm.addEventListener('submit', handleAddEvent);

    // Join event button
    joinEventBtn.addEventListener('click', handleJoinEvent);
    
    // Leave event button
    const leaveEventBtn = document.getElementById('leaveEventBtn');
    leaveEventBtn.addEventListener('click', handleJoinEvent);
    
    // Go to My Events button
    const goToMyEventsBtn = document.getElementById('goToMyEventsBtn');
    goToMyEventsBtn.addEventListener('click', () => {
        eventModal.classList.remove('show');
        handleNavigation('my-events');
    });
    
    // Go to Hub button
    const goToHubBtn = document.getElementById('goToHubBtn');
    goToHubBtn.addEventListener('click', () => {
        eventModal.classList.remove('show');
        handleNavigation('hangout-hub');
    });

    // Message event button
    const messageEventBtn = document.getElementById('messageEventBtn');
    messageEventBtn.addEventListener('click', () => {
        if (currentEventId) {
            openMessaging(currentEventId);
        }
    });

    // Messaging modal close
    const closeMessagingModal = document.getElementById('closeMessagingModal');
    closeMessagingModal.addEventListener('click', () => {
        document.getElementById('messagingModal').classList.remove('show');
    });

    // Send message button
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    sendMessageBtn.addEventListener('click', () => {
        const messageInput = document.getElementById('messageInput');
        const text = messageInput.value.trim();
        if (text && currentMessagingEventId) {
            sendMessage(currentMessagingEventId, text);
        }
    });

    // Send message on Enter key
    const messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const text = messageInput.value.trim();
            if (text && currentMessagingEventId) {
                sendMessage(currentMessagingEventId, text);
            }
        }
    });

    // Close messaging modal when clicking outside
    const messagingModal = document.getElementById('messagingModal');
    messagingModal.addEventListener('click', (e) => {
        if (e.target === messagingModal) {
            messagingModal.classList.remove('show');
        }
    });


    // Category selection - handle subcategory options
    const subcategoryOptions = document.querySelectorAll('.subcategory-option');
    subcategoryOptions.forEach(option => {
        option.addEventListener('click', handleCategorySelection);
    });

    // Category search functionality
    const categorySearch = document.getElementById('categorySearch');
    categorySearch.addEventListener('input', handleCategorySearch);

    // Back to category button
    backToCategory.addEventListener('click', () => {
        categorySelection.style.display = 'block';
        eventDetailsForm.style.display = 'none';
        // Reset search and show all categories
        document.getElementById('categorySearch').value = '';
        document.querySelectorAll('.category-group').forEach(group => {
            group.style.display = 'block';
            group.classList.remove('open');
            group.querySelectorAll('.subcategory-option').forEach(option => {
                option.style.display = 'flex';
            });
        });
        // Reset unlimited attendees button
        document.getElementById('unlimitedAttendees').classList.remove('selected');
        document.getElementById('eventLimit').disabled = false;
        document.getElementById('decreaseLimit').disabled = false;
        document.getElementById('increaseLimit').disabled = false;
    });

    // Number input buttons
    const decreaseLimit = document.getElementById('decreaseLimit');
    const increaseLimit = document.getElementById('increaseLimit');
    const eventLimit = document.getElementById('eventLimit');
    const unlimitedAttendees = document.getElementById('unlimitedAttendees');

    decreaseLimit.addEventListener('click', () => {
        const currentValue = parseInt(eventLimit.value);
        if (currentValue > 3) {
            eventLimit.value = currentValue - 1;
        }
    });

    increaseLimit.addEventListener('click', () => {
        const currentValue = parseInt(eventLimit.value);
        if (currentValue < 20) { // Reasonable upper limit
            eventLimit.value = currentValue + 1;
        }
    });

    // Handle unlimited attendees button
    unlimitedAttendees.addEventListener('click', () => {
        if (unlimitedAttendees.classList.contains('selected')) {
            // Deselect unlimited
            unlimitedAttendees.classList.remove('selected');
            eventLimit.disabled = false;
            decreaseLimit.disabled = false;
            increaseLimit.disabled = false;
            eventLimit.value = 3; // Reset to minimum
        } else {
            // Select unlimited
            unlimitedAttendees.classList.add('selected');
            eventLimit.value = 999; // Set a high number for unlimited
            eventLimit.disabled = true;
            decreaseLimit.disabled = true;
            increaseLimit.disabled = true;
        }
    });

    // Filter button toggle
    filterBtn.addEventListener('click', () => {
        if (filterContainer.style.display === 'none') {
            filterContainer.style.display = 'block';
        } else {
            filterContainer.style.display = 'none';
        }
    });

    // Search icon toggle
    searchIconBtn.addEventListener('click', () => {
        if (searchContainer.style.display === 'none') {
            searchContainer.style.display = 'block';
            searchEvents.focus();
        } else {
            searchContainer.style.display = 'none';
            searchEvents.value = '';
            searchQuery = '';
            renderEvents();
        }
    });

    // Filter option selection
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            filterOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Update current filter
            currentFilter = option.dataset.category;
            
            // Re-render events with new filter
            renderEvents();
            
            // Hide filter dropdown
            filterContainer.style.display = 'none';
        });
    });

    // Search functionality
    searchEvents.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderEvents();
    });

    // Profile actions removed - now using badge system instead

    // Bottom navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const section = btn.dataset.section;
            handleNavigation(section);
        });
    });
}

// Render events list with time-based headers
function renderEvents() {
    // Filter events based on search query and category filter
    let filteredEvents = events;
    
    // Apply search filter
    if (searchQuery) {
        filteredEvents = filteredEvents.filter(event => 
            event.title.toLowerCase().includes(searchQuery) ||
            event.location.toLowerCase().includes(searchQuery) ||
            event.description.toLowerCase().includes(searchQuery)
        );
    }
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => {
            // Map event icons to categories for filtering
            const eventIcon = event.icon || getEventIcon(event.title);
            return getCategoryFromIcon(eventIcon) === currentFilter;
        });
    }

    if (filteredEvents.length === 0) {
        eventsList.innerHTML = searchQuery ? `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No hangouts found</h3>
                <p>Try a different search term or create a new hangout! 🔍</p>
                <button class="create-event-btn" onclick="document.getElementById('addEventBtn').click()">
                    <i class="fas fa-plus"></i>
                    Create Hangout
                </button>
            </div>
        ` : `
            <div class="empty-state">
                <i class="fas fa-calendar-plus"></i>
                <h3>No hangouts yet</h3>
                <p>Be the first to create a hangout and start hanging out! 🎉</p>
                <button class="create-event-btn" onclick="document.getElementById('addEventBtn').click()">
                    <i class="fas fa-plus"></i>
                    Create Hangout
                </button>
            </div>
        `;
        return;
    }

    // Group events by time period - Demo perspective: Thursday, October 23rd, 2025 at 2:00 PM
    const now = new Date("2025-10-23T14:00:00"); // Thursday 2:00 PM for demo
    const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const nextMonday = new Date(tomorrow);
    nextMonday.setDate(nextMonday.getDate() + 6); // Get to next Monday
    nextMonday.setHours(0, 0, 0, 0);

    const next24HoursEvents = filteredEvents.filter(event => {
        const eventDate = new Date(event.date + 'T' + event.time);
        return eventDate >= now && eventDate <= next24Hours;
    }).sort((a, b) => {
        const dateA = new Date(a.date + 'T' + a.time);
        const dateB = new Date(b.date + 'T' + b.time);
        return dateA - dateB;
    });

    const weekendEvents = filteredEvents.filter(event => {
        const eventDate = new Date(event.date + 'T' + event.time);
        // Exclude events that are in the next 24 hours (they should show in that section instead)
        return eventDate >= tomorrow && eventDate < nextMonday && eventDate > next24Hours;
    }).sort((a, b) => {
        const dateA = new Date(a.date + 'T' + a.time);
        const dateB = new Date(b.date + 'T' + b.time);
        return dateA - dateB;
    });

    const laterEvents = filteredEvents.filter(event => {
        const eventDate = new Date(event.date + 'T' + event.time);
        return eventDate >= nextMonday;
    }).sort((a, b) => {
        const dateA = new Date(a.date + 'T' + a.time);
        const dateB = new Date(b.date + 'T' + b.time);
        return dateA - dateB;
    });

    let html = '';

    // Next 24 Hours section
    if (next24HoursEvents.length > 0) {
        html += `
            <div class="time-section">
                <div class="time-header">
                    <i class="fas fa-bolt"></i>
                    <span>Happening in Next 24 Hours</span>
                </div>
                ${next24HoursEvents.map(event => renderEventCard(event)).join('')}
            </div>
        `;
    }

    // Weekend section
    if (weekendEvents.length > 0) {
        html += `
            <div class="time-section">
                <div class="time-header">
                    <i class="fas fa-calendar-weekend"></i>
                    <span>Friday + Weekend</span>
                </div>
                ${weekendEvents.map(event => renderEventCard(event)).join('')}
            </div>
        `;
    }

    // Later section
    if (laterEvents.length > 0) {
        html += `
            <div class="time-section">
                <div class="time-header">
                    <i class="fas fa-calendar-week"></i>
                    <span>Next Week</span>
                </div>
                ${laterEvents.map(event => renderEventCard(event)).join('')}
            </div>
        `;
    }

    eventsList.innerHTML = html;
}

// Render individual event card (calls the main renderEventCard function)
function renderEventCard(event) {
    return renderEventCardWithActions(event, false);
}

// Open event modal
function openEventModal(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    currentEventId = eventId;
    
    // Populate modal with event data
    document.getElementById('modalEventTitle').innerHTML = `<span class="event-icon">${event.icon || '🎉'}</span> ${event.title}`;
    document.getElementById('modalEventDate').textContent = formatDate(event.date);
    document.getElementById('modalEventTime').textContent = formatTime(event.time);
    document.getElementById('modalEventLocation').textContent = event.location;
    const limitText = event.limit >= 999 ? 'Unlimited' : event.limit;
    document.getElementById('modalEventLimit').textContent = `${event.attendees.length}/${limitText} people`;
    
    // Render attendees
    const attendeesList = document.getElementById('attendeesList');
    attendeesList.innerHTML = event.attendees.map(attendee => `
        <div class="attendee-item">${attendee}</div>
    `).join('');
    
    // Update join button and show appropriate actions
    const isUserAttending = event.attendees.includes(currentUser);
    const joinedActions = document.getElementById('joinedActions');
    
    if (isUserAttending) {
        // User is already attending - hide join button, show action buttons
        joinEventBtn.style.display = 'none';
        joinedActions.style.display = 'grid';
    } else {
        // User is not attending - show join button, hide action buttons
        joinEventBtn.style.display = 'block';
        joinedActions.style.display = 'none';
        joinEventBtn.innerHTML = '<i class="fas fa-user-plus"></i> Join Event';
        joinEventBtn.className = 'join-btn';
    }
    
    eventModal.classList.add('show');
}

// Handle join/leave event
function handleJoinEvent() {
    if (!currentEventId) return;
    
    const event = events.find(e => e.id === currentEventId);
    if (!event) return;
    
    const isUserAttending = event.attendees.includes(currentUser);
    
    if (isUserAttending) {
        // Leave event
        event.attendees = event.attendees.filter(attendee => attendee !== currentUser);
    } else {
        // Join event
        if (event.limit < 999 && event.attendees.length >= event.limit) {
            showToast('This event is full!', 'error');
            return;
        }
        event.attendees.push(currentUser);
    }
    
    // Update the modal and re-render events
    openEventModal(currentEventId);
    renderEvents();
    renderMyEvents();
    
    // Show success message
    if (!isUserAttending) {
        showToast('Successfully joined the hangout!', 'success');
    } else {
        showToast('Left the hangout', 'success');
    }
}

// Function to get icon based on event title
function getEventIcon(title) {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('movie') || titleLower.includes('film') || titleLower.includes('cinema')) {
        return '🎬';
    } else if (titleLower.includes('board') || titleLower.includes('game') || titleLower.includes('card')) {
        return '🎲';
    } else if (titleLower.includes('tennis')) {
        return '🎾';
    } else if (titleLower.includes('pickleball')) {
        return '🏓';
    } else if (titleLower.includes('hiking') || titleLower.includes('hike') || titleLower.includes('trail')) {
        return '🥾';
    } else if (titleLower.includes('basketball') || titleLower.includes('basket')) {
        return '🏀';
    } else if (titleLower.includes('football') || titleLower.includes('soccer')) {
        return '⚽';
    } else if (titleLower.includes('swimming') || titleLower.includes('pool')) {
        return '🏊';
    } else if (titleLower.includes('dinner') || titleLower.includes('lunch') || titleLower.includes('food')) {
        return '🍽️';
    } else if (titleLower.includes('party') || titleLower.includes('celebration')) {
        return '🎉';
    } else if (titleLower.includes('study') || titleLower.includes('work')) {
        return '📚';
    } else {
        return '🎯'; // Default icon
    }
}

// Function to get category from icon
function getCategoryFromIcon(icon) {
    // Sports icons
    if (['🏀', '⚽', '🎾', '🏓', '🏐', '⛳', '🥏', '🏸', '🥎', '🏈', '🏊', '🏃', '🚴', '🏋️'].includes(icon)) {
        return 'sports';
    }
    // Entertainment icons
    if (['🎬', '🎲', '🎮', '🎤', '🧠', '🔍', '🕹️', '😂', '💃', '🎩', '🎭', '🎪', '🎵', '🃏'].includes(icon)) {
        return 'entertainment';
    }
    // Food & Dining icons
    if (['🍽️', '🍖', '🥘', '👨‍🍳'].includes(icon)) {
        return 'food';
    }
    // Social icons
    if (['🎉', '🤝', '💼', '💕', '🍹', '🍻', '🗣️', '📖', '🍷', '🥞', '🧊'].includes(icon)) {
        return 'social';
    }
    // Fitness icons
    if (['💪', '🏋️', '🧘', '🏃', '🚴', '🏊'].includes(icon)) {
        return 'fitness';
    }
    // Arts & Culture icons
    if (['🏛️', '🖼️', '🎵', '🎭', '📸', '🎨', '📖', '💃', '🏺', '🗿', '🎼', '📚', '🎬', '🎪', '🚶'].includes(icon)) {
        return 'arts';
    }
    // Education icons
    if (['📚', '🔧', '🎓', '🗣️'].includes(icon)) {
        return 'education';
    }
    // Outdoor icons
    if (['🥾', '⛺', '🧺', '🎣', '🏖️', '🛶', '🧗', '🚴', '⭐', '🔥', '🧘', '🐦', '📸', '🌱', '🎯'].includes(icon)) {
        return 'outdoor';
    }
    
    return 'all'; // Default to all if no category matches
}

// Toggle category dropdown
function toggleCategoryDropdown(categoryName) {
    const dropdown = document.getElementById(`${categoryName}-dropdown`);
    const categoryGroup = dropdown.closest('.category-group');
    
    // Close all other dropdowns
    document.querySelectorAll('.category-group').forEach(group => {
        if (group !== categoryGroup) {
            group.classList.remove('open');
        }
    });
    
    // Toggle current dropdown
    categoryGroup.classList.toggle('open');
}

// Handle category search
function handleCategorySearch(e) {
    const searchQuery = e.target.value.toLowerCase();
    const categoryGroups = document.querySelectorAll('.category-group');
    
    categoryGroups.forEach(group => {
        const header = group.querySelector('.category-header span').textContent.toLowerCase();
        const subcategories = group.querySelectorAll('.subcategory-option');
        let hasMatchingSubcategory = false;
        
        subcategories.forEach(subcategory => {
            const subcategoryName = subcategory.querySelector('span').textContent.toLowerCase();
            const subcategoryIcon = subcategory.querySelector('.category-icon').textContent;
            
            // Check if the search query matches the subcategory name or icon
            const matches = subcategoryName.includes(searchQuery) || 
                          subcategoryIcon.includes(searchQuery) ||
                          searchQuery === '';
            
            if (matches) {
                subcategory.style.display = 'flex';
                hasMatchingSubcategory = true;
            } else {
                subcategory.style.display = 'none';
            }
        });
        
        // Show/hide entire category group based on matches
        if (searchQuery === '' || header.includes(searchQuery) || hasMatchingSubcategory) {
            group.style.display = 'block';
            // Auto-open dropdown if there are matching subcategories
            if (hasMatchingSubcategory && searchQuery !== '') {
                group.classList.add('open');
            }
        } else {
            group.style.display = 'none';
        }
    });
}

// Handle category selection
function handleCategorySelection(e) {
    const selectedOption = e.currentTarget;
    const category = selectedOption.dataset.category;
    const icon = selectedOption.dataset.icon;
    const categoryName = selectedOption.querySelector('span').textContent;
    
    // Remove selected class from all subcategory options
    document.querySelectorAll('.subcategory-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    selectedOption.classList.add('selected');
    
    // Update selected category display
    document.getElementById('selectedIcon').textContent = icon;
    document.getElementById('selectedCategoryName').textContent = categoryName;
    
    // Show/hide title field based on category
    const titleGroup = document.getElementById('titleGroup');
    if (category === 'movie') {
        titleGroup.style.display = 'block';
        document.getElementById('eventTitle').required = true;
    } else {
        titleGroup.style.display = 'none';
        document.getElementById('eventTitle').required = false;
        document.getElementById('eventTitle').value = '';
    }
    
    // Hide category selection and show event details form
    categorySelection.style.display = 'none';
    eventDetailsForm.style.display = 'block';
}

// Handle add event form
function handleAddEvent(e) {
    e.preventDefault();
    
    const formData = new FormData(addEventForm);
    const selectedCategory = document.querySelector('.category-option.selected');
    const icon = selectedCategory ? selectedCategory.dataset.icon : '🎉';
    const categoryName = selectedCategory ? selectedCategory.querySelector('span').textContent : 'Event';
    
    // Generate title based on category
    let title;
    if (formData.get('title')) {
        // Movie category - use the provided title
        title = formData.get('title');
    } else {
        // Other categories - generate title from category name
        title = categoryName;
    }
    
    const newEvent = {
        id: Date.now(), // Simple ID generation
        title: title,
        date: formData.get('date'),
        time: formData.get('time'),
        location: formData.get('location'),
        limit: parseInt(formData.get('limit')),
        description: formData.get('description'),
        attendees: [currentUser], // Creator automatically joins
        icon: icon,
        creator: currentUser
    };
    
    // Validate minimum people
    if (newEvent.limit < 3) {
        showToast('Minimum 3 people required!', 'warning');
        return;
    }

    // Validate date is not in the past
    const eventDateTime = new Date(newEvent.date + 'T' + newEvent.time);
    const now = getDemoTime();
    if (eventDateTime < now) {
        showToast('Hangout date and time must be in the future!', 'warning');
        return;
    }
    
    // Add to events array
    events.unshift(newEvent); // Add to beginning
    
    // Reset form and close modal
    addEventForm.reset();
    addEventModal.classList.remove('show');
    
    // Reset category selection
    categorySelection.style.display = 'block';
    eventDetailsForm.style.display = 'none';
    document.querySelectorAll('.subcategory-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Reset search and show all categories
    document.getElementById('categorySearch').value = '';
    document.querySelectorAll('.category-group').forEach(group => {
        group.style.display = 'block';
        group.classList.remove('open');
        group.querySelectorAll('.subcategory-option').forEach(option => {
            option.style.display = 'flex';
        });
    });
    
    // Reset unlimited attendees button
    document.getElementById('unlimitedAttendees').classList.remove('selected');
    document.getElementById('eventLimit').disabled = false;
    document.getElementById('decreaseLimit').disabled = false;
    document.getElementById('increaseLimit').disabled = false;
    
    // Re-render events
    renderEvents();
    renderMyEvents();
    updateProfileStats();
    
    // Navigate to hub and update navigation
    handleNavigation('hangout-hub');
    
    // Update bottom navigation to show hub as active
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.nav-btn[data-section="hangout-hub"]').classList.add('active');
    
    // Show success message
    showToast('Hangout created successfully!', 'success');
}

// Handle navigation
function handleNavigation(section) {
    // Hide all sections
    document.getElementById('hangoutHub').style.display = 'none';
    document.getElementById('myEvents').style.display = 'none';
    document.getElementById('messages').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    
    // Show the selected section
    if (section === 'hangout-hub') {
        document.getElementById('hangoutHub').style.display = 'block';
        currentSection = 'hangout-hub';
        renderEvents();
    } else if (section === 'my-events') {
        document.getElementById('myEvents').style.display = 'block';
        currentSection = 'my-events';
        renderMyEvents();
    } else if (section === 'messages') {
        document.getElementById('messages').style.display = 'block';
        currentSection = 'messages';
        renderMessagesTab();
    } else if (section === 'profile') {
        document.getElementById('profile').style.display = 'block';
        currentSection = 'profile';
        updateProfileStats();
    }
}

// Render my events
function renderMyEvents() {
    // Get attending events (events user joined but didn't create)
    const attendingEvents = events.filter(event => 
        event.attendees.includes(currentUser) && event.creator !== currentUser
    ).sort((a, b) => {
        // Sort by date first, then by time
        const dateA = new Date(a.date + 'T' + a.time);
        const dateB = new Date(b.date + 'T' + b.time);
        return dateA - dateB;
    });
    
    // Get hosted events (events user created)
    const hostedEvents = events.filter(event => 
        event.creator === currentUser
    );
    
    // Render attending events
    const attendingEventsList = document.getElementById('attendingEventsList');
    if (attendingEvents.length === 0) {
        attendingEventsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-plus"></i>
                <h3>No hangouts joined yet</h3>
                <p>Join your first hangout to get started! 🎉</p>
            </div>
        `;
    } else {
        attendingEventsList.innerHTML = attendingEvents.map(event => renderAttendingEventCard(event)).join('');
    }
    
    // Render hosted events
    const hostedEventsList = document.getElementById('hostedEventsList');
    let hostedEventsHtml = '';
    
    // Add existing hosted events
    if (hostedEvents.length > 0) {
        hostedEventsHtml += hostedEvents.map(event => renderEventCardWithActions(event, true)).join('');
    }
    
    // Always add the "Add Event" card
    hostedEventsHtml += `
        <div class="event-card add-event-card" onclick="document.getElementById('addEventBtn').click()">
            <div class="event-title">
                <div class="event-title-left">
                    <span class="event-icon">➕</span>
                    Create New Hangout
                </div>
            </div>
            <div class="event-meta">
                <div><i class="fas fa-plus-circle"></i> Start planning your next event</div>
            </div>
            <div class="event-attendees">
                <div class="attendees-count">Tap to create</div>
            </div>
        </div>
    `;
    
    hostedEventsList.innerHTML = hostedEventsHtml;
}

// Update profile stats
function updateProfileStats() {
    const createdEvents = events.filter(event => event.creator === currentUser);
    const joinedEvents = events.filter(event => 
        event.attendees.includes(currentUser) && event.creator !== currentUser
    );
    const totalAttendees = events.reduce((total, event) => {
        if (event.creator === currentUser) {
            return total + event.attendees.length;
        }
        return total;
    }, 0);
    
    // Stats are now displayed in the stats grid below
    
    // Update badges
    updateBadges(5, 12, 28);
    
    // Update stats grid
    updateStatsGrid(5, 12, 28, 67);
}

// Update stats grid with cards
function updateStatsGrid(created, joined, totalAttendees, peopleMet) {
    const statsGrid = document.getElementById('statsGrid');
    
    const stats = [
        {
            icon: '🎯',
            number: created,
            label: 'Events Created',
            subNumber: totalAttendees,
            subLabel: 'Total Attendees',
            color: 'linear-gradient(135deg, #1e40af, #3b82f6)'
        },
        {
            icon: '🤝',
            number: joined,
            label: 'Events Joined',
            color: 'linear-gradient(135deg, #059669, #10b981)'
        },
        {
            icon: '🌟',
            number: peopleMet,
            label: 'People Met',
            color: 'linear-gradient(135deg, #dc2626, #ef4444)'
        }
    ];
    
    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card" style="background: ${stat.color};">
            <span class="stat-card-icon">${stat.icon}</span>
            <div class="stat-card-number">${stat.number}</div>
            <div class="stat-card-label">${stat.label}</div>
            ${stat.subNumber ? `
                <div class="stat-card-sub">
                    <div class="stat-card-sub-number">${stat.subNumber}</div>
                    <div class="stat-card-sub-label">${stat.subLabel}</div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Badge system
const badges = [
    {
        id: 'first-event',
        name: 'First Event',
        icon: '🎉',
        description: 'Create your first event',
        condition: (created, joined, attendees) => created >= 1,
        progress: (created, joined, attendees) => Math.min(created, 1),
        target: 1,
        tips: ['Start by creating a simple event like a coffee meetup', 'Choose a familiar location for your first event', 'Keep the group small (3-5 people) to start']
    },
    {
        id: 'social-butterfly',
        name: 'Social Butterfly',
        icon: '🦋',
        description: 'Join 3 events',
        condition: (created, joined, attendees) => joined >= 3,
        progress: (created, joined, attendees) => Math.min(joined, 3),
        target: 3,
        tips: ['Browse the Hub to find interesting events', 'Don\'t be shy - everyone is there to meet new people', 'Try different types of events to expand your interests']
    },
    {
        id: 'event-master',
        name: 'Event Master',
        icon: '👑',
        description: 'Create 5 events',
        condition: (created, joined, attendees) => created >= 5,
        progress: (created, joined, attendees) => Math.min(created, 5),
        target: 5,
        tips: ['Plan events around your interests and hobbies', 'Try different times and locations', 'Ask for feedback from attendees to improve']
    },
    {
        id: 'popular-host',
        name: 'Popular Host',
        icon: '⭐',
        description: 'Have 20+ total attendees',
        condition: (created, joined, attendees) => attendees >= 20,
        progress: (created, joined, attendees) => Math.min(attendees, 20),
        target: 20,
        tips: ['Create events that appeal to many people', 'Promote your events in advance', 'Make sure your events are well-organized and fun']
    },
    {
        id: 'early-bird',
        name: 'Early Bird',
        icon: '🐦',
        description: 'Join an event today',
        condition: (created, joined, attendees) => {
            return events.some(event => 
                event.attendees.includes(currentUser) && 
                event.date === getTodayDate()
            );
        },
        progress: (created, joined, attendees) => 0,
        target: 1,
        tips: ['Check the Hub for events happening today', 'Look for last-minute events', 'Be spontaneous and join something new']
    },
    {
        id: 'weekend-warrior',
        name: 'Weekend Warrior',
        icon: '🏆',
        description: 'Create a weekend event',
        condition: (created, joined, attendees) => {
            return events.some(event => {
                if (event.creator !== currentUser) return false;
                const eventDate = new Date(event.date);
                const dayOfWeek = eventDate.getDay();
                return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
            });
        },
        progress: (created, joined, attendees) => 0,
        target: 1,
        tips: ['Weekends are perfect for longer activities', 'Try outdoor events like hiking or sports', 'Plan something fun that people look forward to']
    },
    {
        id: 'night-owl',
        name: 'Night Owl',
        icon: '🦉',
        description: 'Create an evening event (after 6 PM)',
        condition: (created, joined, attendees) => {
            return events.some(event => {
                if (event.creator !== currentUser) return false;
                const hour = parseInt(event.time.split(':')[0]);
                return hour >= 18; // 6 PM or later
            });
        },
        progress: (created, joined, attendees) => 0,
        target: 1,
        tips: ['Evening events are great for socializing', 'Consider dinner events or movie nights', 'Make sure the location is accessible in the evening']
    },
    {
        id: 'morning-person',
        name: 'Morning Person',
        icon: '🌅',
        description: 'Create a morning event (before 10 AM)',
        condition: (created, joined, attendees) => {
            return events.some(event => {
                if (event.creator !== currentUser) return false;
                const hour = parseInt(event.time.split(':')[0]);
                return hour < 10; // Before 10 AM
            });
        },
        progress: (created, joined, attendees) => 0,
        target: 1,
        tips: ['Morning events are great for active people', 'Try breakfast meetups or morning workouts', 'Make sure to provide coffee or breakfast']
    },
    {
        id: 'community-builder',
        name: 'Community Builder',
        icon: '🏘️',
        description: 'Create events with 10+ people',
        condition: (created, joined, attendees) => {
            return events.some(event => 
                event.creator === currentUser && event.limit >= 10
            );
        },
        progress: (created, joined, attendees) => 0,
        target: 1,
        tips: ['Large events need more planning and organization', 'Choose venues that can accommodate many people', 'Consider having co-hosts to help manage the event']
    }
];

function updateBadges(created, joined, attendees) {
    const badgesGrid = document.getElementById('badgesGrid');
    let html = '';
    
    badges.forEach(badge => {
        const isEarned = badge.condition(created, joined, attendees);
        const badgeClass = isEarned ? 'earned' : 'locked';
        
        html += `
            <div class="badge ${badgeClass}" data-badge="${badge.id}" onclick="showBadgeDetail('${badge.id}')">
                <span class="badge-icon">${badge.icon}</span>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-tooltip">${badge.description}</div>
            </div>
        `;
    });
    
    badgesGrid.innerHTML = html;
}

// Show badge detail modal
function showBadgeDetail(badgeId) {
    const badge = badges.find(b => b.id === badgeId);
    if (!badge) return;
    
    const isEarned = badge.condition(5, 12, 28); // Using BYU student stats
    const progress = badge.progress(5, 12, 28);
    const progressPercent = (progress / badge.target) * 100;
    
    // Populate modal
    document.getElementById('badgeModalTitle').innerHTML = `<span class="badge-icon">${badge.icon}</span> ${badge.name}`;
    document.getElementById('badgeIconLarge').textContent = badge.icon;
    document.getElementById('badgeDescription').textContent = badge.description;
    
    // Progress section
    const progressHtml = `
        <h4>Progress</h4>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="progress-text">${progress}/${badge.target} ${isEarned ? '✓ Earned!' : 'needed'}</div>
    `;
    document.getElementById('badgeProgress').innerHTML = progressHtml;
    
    // Tips section
    const tipsHtml = `
        <h4>Tips</h4>
        <ul>
            ${badge.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
    `;
    document.getElementById('badgeTips').innerHTML = tipsHtml;
    
    // Show modal
    document.getElementById('badgeModal').classList.add('show');
}

// Render event card with edit/delete options for creator
function renderEventCardWithActions(event, showActions = false) {
    const isCreator = event.creator === currentUser;
    const actionsHtml = showActions && isCreator ? `
        <div class="event-actions">
            <button class="edit-btn" onclick="editEvent(${event.id})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" onclick="deleteEvent(${event.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    ` : '';

    return `
        <div class="event-card" onclick="openEventModal(${event.id})">
            <div class="event-title">
                <div class="event-title-left">
                    <span class="event-icon">${event.icon || '🎉'}</span>
                    ${event.title}
                </div>
                <div class="event-date-time">
                    <span class="date">${formatDate(event.date)}</span>
                    <span class="time">${formatTime(event.time)}</span>
                </div>
            </div>
            <div class="event-meta">
                <div><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
            </div>
            <div class="event-attendees">
                <div class="attendees-count">${event.attendees.length}/${event.limit >= 999 ? '∞' : event.limit}</div>
                <div class="attendees-avatars">
                    ${event.attendees.slice(0, 3).map((attendee, index) => `
                        <div class="attendee-avatar" style="background-color: ${getAvatarColor(index)}">
                            ${attendee.charAt(0)}
                        </div>
                    `).join('')}
                    ${event.attendees.length > 3 ? `<div class="attendee-avatar">+${event.attendees.length - 3}</div>` : ''}
                </div>
            </div>
            ${actionsHtml}
        </div>
    `;
}

// Render attending event card with leave button
function renderAttendingEventCard(event) {
    const leaveButtonHtml = `
        <div class="event-actions">
            <button class="leave-btn" onclick="leaveEvent(${event.id})">
                <i class="fas fa-user-minus"></i>
            </button>
        </div>
    `;

    return `
        <div class="event-card" onclick="openEventModal(${event.id})">
            <div class="event-title">
                <div class="event-title-left">
                    <span class="event-icon">${event.icon || '🎉'}</span>
                    ${event.title}
                </div>
                <div class="event-date-time">
                    <span class="date">${formatDate(event.date)}</span>
                    <span class="time">${formatTime(event.time)}</span>
                </div>
            </div>
            <div class="event-meta">
                <div><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
            </div>
            <div class="event-attendees">
                <div class="attendees-count">${event.attendees.length}/${event.limit >= 999 ? '∞' : event.limit}</div>
                <div class="attendees-avatars">
                    ${event.attendees.slice(0, 3).map((attendee, index) => `
                        <div class="attendee-avatar" style="background-color: ${getAvatarColor(index)}">
                            ${attendee.charAt(0)}
                        </div>
                    `).join('')}
                    ${event.attendees.length > 3 ? `<div class="attendee-avatar">+${event.attendees.length - 3}</div>` : ''}
                </div>
            </div>
            ${leaveButtonHtml}
        </div>
    `;
}

// Edit event
function editEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // For demo purposes, just show a toast
    showToast(`Edit functionality would open for: ${event.title}`, 'warning');
}

// Delete event
function deleteEvent(eventId) {
        events = events.filter(e => e.id !== eventId);
        renderEvents();
        renderMyEvents();
        updateProfileStats();
    showToast('Hangout deleted!', 'success');
}

// Leave event
function leaveEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // Remove user from attendees
    event.attendees = event.attendees.filter(attendee => attendee !== currentUser);
    
    // Update all sections
    renderEvents();
    renderMyEvents();
    updateProfileStats();
    
    // Show success message
    showToast('Left the hangout', 'success');
}

// Utility functions
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    });
}

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

function getAvatarColor(index) {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    return colors[index % colors.length];
}

// Set minimum date to today for the date input
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('eventDate');
    if (dateInput) {
        const today = getDemoTime().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Messaging Functions

// Open messaging modal for specific event
function openMessaging(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    currentMessagingEventId = eventId;
    
    // Set modal title
    document.getElementById('messagingModalTitle').innerHTML = `<span class="event-icon">${event.icon || '🎉'}</span> ${event.title}`;
    
    // Render messages
    renderMessages(eventId);
    
    // Show modal
    document.getElementById('messagingModal').classList.add('show');
}

// Send message
function sendMessage(eventId, text) {
    if (!text.trim()) return;
    
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    // Add message to event
    const newMessage = {
        id: Date.now(),
        sender: currentUser,
        text: text.trim(),
        timestamp: getDemoTime(),
        isHost: event.creator === currentUser
    };
    
    if (!event.messages) {
        event.messages = [];
    }
    
    event.messages.push(newMessage);
    
    // Clear input
    document.getElementById('messageInput').value = '';
    
    // Re-render messages
    renderMessages(eventId);
    
    // Update messages tab if visible
    if (currentSection === 'messages') {
        renderMessagesTab();
    }
    
    // Update unread count
    updateUnreadBadge();
}

// Render messages in modal
function renderMessages(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;
    
    const messagesThread = document.getElementById('messagesThread');
    
    if (!event.messages || event.messages.length === 0) {
        messagesThread.innerHTML = `
            <div class="empty-messages">
                <i class="fas fa-comments"></i>
                <p>No messages yet. Start the conversation!</p>
            </div>
        `;
        return;
    }
    
    // Sort messages by timestamp
    const sortedMessages = [...event.messages].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    messagesThread.innerHTML = sortedMessages.map(message => `
        <div class="message-bubble ${message.isHost ? 'host' : 'attendee'}">
            <div class="message-sender">${message.sender}</div>
            <div class="message-text">${message.text}</div>
            <div class="message-time">${formatMessageTime(message.timestamp)}</div>
        </div>
    `).join('');
    
    // Scroll to bottom
    messagesThread.scrollTop = messagesThread.scrollHeight;
}

// Render messages tab
function renderMessagesTab() {
    const messagesList = document.getElementById('messagesList');
    
    // Get events with messages
    const eventsWithMessages = events.filter(event => 
        event.messages && event.messages.length > 0 && 
        (event.attendees.includes(currentUser) || event.creator === currentUser)
    );
    
    if (eventsWithMessages.length === 0) {
        messagesList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-comments"></i>
                <h3>No messages yet</h3>
                <p>Join events to start conversations! 💬</p>
            </div>
        `;
        return;
    }
    
    // Sort by most recent message
    eventsWithMessages.sort((a, b) => {
        const aLastMessage = a.messages[a.messages.length - 1];
        const bLastMessage = b.messages[b.messages.length - 1];
        return new Date(bLastMessage.timestamp) - new Date(aLastMessage.timestamp);
    });
    
    messagesList.innerHTML = eventsWithMessages.map(event => {
        const lastMessage = event.messages[event.messages.length - 1];
        const unreadCount = getUnreadCount(event.id);
        
        return `
            <div class="message-event-card" onclick="openMessaging(${event.id})">
                <div class="message-event-header">
                    <div class="message-event-title">
                        <span class="message-event-icon">${event.icon || '🎉'}</span>
                        ${event.title}
                    </div>
                    <div class="message-event-date">${formatDate(event.date)}</div>
                </div>
                <div class="message-preview">${lastMessage.text}</div>
                <div class="message-meta">
                    <span>${lastMessage.sender} • ${formatMessageTime(lastMessage.timestamp)}</span>
                    ${unreadCount > 0 ? `<div class="message-count">${unreadCount}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Get unread message count for event
function getUnreadCount(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event || !event.messages) return 0;
    
    // For demo purposes, count messages not from current user as unread
    return event.messages.filter(message => 
        message.sender !== currentUser && 
        new Date(message.timestamp) > new Date(getDemoTime().getTime() - 24 * 60 * 60 * 1000) // Last 24 hours
    ).length;
}

// Update unread badge
function updateUnreadBadge() {
    const badge = document.getElementById('messagesBadge');
    const totalUnread = events.reduce((total, event) => total + getUnreadCount(event.id), 0);
    
    if (totalUnread > 0) {
        badge.textContent = totalUnread;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// Format message time
function formatMessageTime(timestamp) {
    const now = getDemoTime();
    const messageTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return messageTime.toLocaleDateString();
}

// New Hangout Window Functions
function setupNewHangoutWindow() {
    const quickHangoutBtn = document.getElementById('quickHangoutBtn');
    const newHangoutModal = document.getElementById('newHangoutModal');
    const closeNewHangoutModal = document.getElementById('closeNewHangoutModal');
    const hangoutTypes = document.querySelectorAll('.hangout-type');
    const hangoutDetails = document.getElementById('hangoutDetails');
    const backToTypes = document.getElementById('backToTypes');
    const quickEventTime = document.getElementById('quickEventTime');
    const customTimeGroup = document.getElementById('customTimeGroup');
    const limitBtns = document.querySelectorAll('.limit-btn');
    const createQuickHangout = document.getElementById('createQuickHangout');
    
    // Check if elements exist before adding event listeners
    if (!quickHangoutBtn || !newHangoutModal) {
        console.warn('New hangout window elements not found, skipping setup');
        return;
    }
    
    // Open new hangout modal
    quickHangoutBtn.addEventListener('click', () => {
        newHangoutModal.classList.add('show');
        // Reset form
        resetNewHangoutForm();
    });
    
    // Close new hangout modal
    if (closeNewHangoutModal) {
        closeNewHangoutModal.addEventListener('click', () => {
            newHangoutModal.classList.remove('show');
            resetNewHangoutForm();
        });
    }
    
    // Close modal when clicking outside
    newHangoutModal.addEventListener('click', (e) => {
        if (e.target === newHangoutModal) {
            newHangoutModal.classList.remove('show');
            resetNewHangoutForm();
        }
    });
    
    // Handle hangout type selection
    if (hangoutTypes.length > 0) {
        hangoutTypes.forEach(type => {
            type.addEventListener('click', () => {
                // Remove selected class from all types
                hangoutTypes.forEach(t => t.classList.remove('selected'));
                // Add selected class to clicked type
                type.classList.add('selected');
                
                // Update selected type display
                const typeIcon = type.querySelector('.type-icon').textContent;
                const typeName = type.querySelector('span').textContent;
                const selectedTypeIcon = document.getElementById('selectedTypeIcon');
                const selectedTypeName = document.getElementById('selectedTypeName');
                if (selectedTypeIcon) selectedTypeIcon.textContent = typeIcon;
                if (selectedTypeName) selectedTypeName.textContent = typeName;
                
                // Show hangout details
                const typeSelector = document.querySelector('.hangout-type-selector');
                if (typeSelector) typeSelector.style.display = 'none';
                if (hangoutDetails) hangoutDetails.style.display = 'block';
                
                // Set default title based on type
                const eventTitle = document.getElementById('quickEventTitle');
                if (eventTitle) eventTitle.value = typeName;
            });
        });
    }
    
    // Back to types button
    if (backToTypes) {
        backToTypes.addEventListener('click', () => {
            if (hangoutDetails) hangoutDetails.style.display = 'none';
            const typeSelector = document.querySelector('.hangout-type-selector');
            if (typeSelector) typeSelector.style.display = 'block';
        });
    }
    
    // Handle time selection
    if (quickEventTime) {
        quickEventTime.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                if (customTimeGroup) customTimeGroup.style.display = 'block';
            } else {
                if (customTimeGroup) customTimeGroup.style.display = 'none';
            }
        });
    }
    
    // Handle limit button selection
    if (limitBtns.length > 0) {
        limitBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove selected class from all buttons
                limitBtns.forEach(b => b.classList.remove('selected'));
                // Add selected class to clicked button
                btn.classList.add('selected');
            });
        });
    }
    
    // Create quick hangout
    if (createQuickHangout) {
        createQuickHangout.addEventListener('click', () => {
            createQuickHangoutEvent();
        });
    }
}

function resetNewHangoutForm() {
    // Reset type selection
    document.querySelectorAll('.hangout-type').forEach(type => {
        type.classList.remove('selected');
    });
    
    // Reset form fields
    document.getElementById('quickEventTitle').value = '';
    document.getElementById('quickEventTime').value = 'now';
    document.getElementById('customDateTime').value = '';
    document.getElementById('quickEventLocation').value = '';
    
    // Reset limit selection
    document.querySelectorAll('.limit-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Hide custom time group
    document.getElementById('customTimeGroup').style.display = 'none';
    
    // Show type selector, hide details
    document.querySelector('.hangout-type-selector').style.display = 'block';
    document.getElementById('hangoutDetails').style.display = 'none';
}

function createQuickHangoutEvent() {
    const selectedType = document.querySelector('.hangout-type.selected');
    if (!selectedType) {
        showToast('Please select a hangout type!', 'warning');
        return;
    }
    
    const title = document.getElementById('quickEventTitle').value.trim();
    const location = document.getElementById('quickEventLocation').value.trim();
    const timeOption = document.getElementById('quickEventTime').value;
    const selectedLimit = document.querySelector('.limit-btn.selected');
    
    if (!title || !location) {
        showToast('Please fill in all required fields!', 'warning');
        return;
    }
    
    if (!selectedLimit) {
        showToast('Please select a people limit!', 'warning');
        return;
    }
    
    // Calculate event date and time
    let eventDate, eventTime;
    const now = getDemoTime();
    
    switch (timeOption) {
        case 'now':
            eventDate = now.toISOString().split('T')[0];
            eventTime = now.toTimeString().slice(0, 5);
            break;
        case '1hour':
            const oneHour = new Date(now.getTime() + 60 * 60 * 1000);
            eventDate = oneHour.toISOString().split('T')[0];
            eventTime = oneHour.toTimeString().slice(0, 5);
            break;
        case '2hours':
            const twoHours = new Date(now.getTime() + 2 * 60 * 60 * 1000);
            eventDate = twoHours.toISOString().split('T')[0];
            eventTime = twoHours.toTimeString().slice(0, 5);
            break;
        case 'tomorrow':
            const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
            eventDate = tomorrow.toISOString().split('T')[0];
            eventTime = '12:00'; // Default to noon
            break;
        case 'custom':
            const customDateTime = document.getElementById('customDateTime').value;
            if (!customDateTime) {
                showToast('Please select a custom date and time!', 'warning');
                return;
            }
            const customDate = new Date(customDateTime);
            eventDate = customDate.toISOString().split('T')[0];
            eventTime = customDate.toTimeString().slice(0, 5);
            break;
    }
    
    // Get limit
    const limitValue = selectedLimit.dataset.limit;
    const limit = limitValue === 'unlimited' ? 999 : parseInt(limitValue);
    
    // Get type icon
    const typeIcon = selectedType.querySelector('.type-icon').textContent;
    
    // Create new event
    const newEvent = {
        id: Date.now(),
        title: title,
        date: eventDate,
        time: eventTime,
        location: location,
        limit: limit,
        description: `Quick hangout: ${title}`,
        attendees: [currentUser],
        icon: typeIcon,
        creator: currentUser
    };
    
    // Validate date is not in the past
    const eventDateTime = new Date(newEvent.date + 'T' + newEvent.time);
    if (eventDateTime < now) {
        showToast('Hangout date and time must be in the future!', 'warning');
        return;
    }
    
    // Add to events array
    events.unshift(newEvent);
    
    // Close modal and reset form
    document.getElementById('newHangoutModal').classList.remove('show');
    resetNewHangoutForm();
    
    // Re-render events
    renderEvents();
    renderMyEvents();
    updateProfileStats();
    
    // Show success message
    showToast('Quick hangout created successfully!', 'success');
}

// Tour System Implementation
let tourCurrentStep = 0;
let tourSteps = [];
let tourOverlay = null;
let tourSpotlight = null;
let tourTooltip = null;

// Tour steps configuration
const tourConfig = [
    {
        target: '.nav-btn[data-section="hangout-hub"]',
        title: 'Hangout Hub',
        description: 'Browse and discover events happening around you. This is where you\'ll find all the cool hangouts!'
    },
    {
        target: '.nav-btn[data-section="my-events"]',
        title: 'My Hangouts',
        description: 'View events you\'re attending and events you\'ve created. Keep track of your social calendar!'
    },
    {
        target: '.nav-btn.add-event-btn',
        title: 'Create Hangout',
        description: 'Start your own hangout! Click the + button to create events and invite others to join.'
    },
    {
        target: '.nav-btn[data-section="messages"]',
        title: 'Messages',
        description: 'Chat with other attendees and hosts. Stay connected with your hangout groups!'
    }
];

// Initialize tour
function initializeTour() {
    // Check if tour has been completed
    if (localStorage.getItem('tourCompleted') === 'true') {
        return;
    }
    
    // Get tour elements
    tourOverlay = document.getElementById('tourOverlay');
    tourSpotlight = document.getElementById('tourSpotlight');
    tourTooltip = document.getElementById('tourTooltip');
    
    // Setup tour event listeners
    setupTourEventListeners();
    
    // Start the tour
    startTour();
}

// Setup tour event listeners
function setupTourEventListeners() {
    const skipBtn = document.getElementById('tourSkipBtn');
    const nextBtn = document.getElementById('tourNextBtn');
    
    skipBtn.addEventListener('click', endTour);
    nextBtn.addEventListener('click', nextTourStep);
    
    // Allow clicking on highlighted elements to advance
    tourOverlay.addEventListener('click', (e) => {
        if (e.target === tourOverlay) {
            // Click outside tooltip - advance to next step
            nextTourStep();
        }
    });
}

// Start the tour
function startTour() {
    tourCurrentStep = 0;
    tourOverlay.style.display = 'flex';
    showTourStep();
}

// Show current tour step
function showTourStep() {
    if (tourCurrentStep >= tourConfig.length) {
        endTour();
        return;
    }
    
    const step = tourConfig[tourCurrentStep];
    const targetElement = document.querySelector(step.target);
    
    if (!targetElement) {
        console.warn('Tour target element not found:', step.target);
        tourCurrentStep++;
        showTourStep();
        return;
    }
    
    // Update step counter
    document.getElementById('tourStepCounter').textContent = `Step ${tourCurrentStep + 1} of ${tourConfig.length}`;
    
    // Update tooltip content
    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourDescription').textContent = step.description;
    
    // Position spotlight on target element
    positionSpotlight(targetElement);
    
    // Scroll to target element if needed
    scrollToElement(targetElement);
}

// Position spotlight on target element
function positionSpotlight(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    // Check if this is the main content area or a navigation button
    const isMainContent = element.classList.contains('main-content');
    
    if (isMainContent) {
        // For main content, cover the full area including footer
        const header = document.querySelector('.app-header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        const startY = headerHeight;
        const endY = window.innerHeight; // Include footer in focus
        
        tourSpotlight.style.left = (rect.left + scrollLeft) + 'px';
        tourSpotlight.style.top = (startY + scrollTop) + 'px';
        tourSpotlight.style.width = rect.width + 'px';
        tourSpotlight.style.height = (endY - startY) + 'px';
    } else {
        // For navigation buttons, highlight just the button with some padding
        const padding = 8;
        
        tourSpotlight.style.left = (rect.left + scrollLeft - padding) + 'px';
        tourSpotlight.style.top = (rect.top + scrollTop - padding) + 'px';
        tourSpotlight.style.width = (rect.width + (padding * 2)) + 'px';
        tourSpotlight.style.height = (rect.height + (padding * 2)) + 'px';
    }
}


// Scroll to element if needed
function scrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // If element is not visible, scroll to it
    if (rect.top < 0 || rect.bottom > viewportHeight) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Next tour step
function nextTourStep() {
    tourCurrentStep++;
    showTourStep();
}

// End tour
function endTour() {
    tourOverlay.style.display = 'none';
    localStorage.setItem('tourCompleted', 'true');
    showToast('Tour completed! Welcome to We Should Hangout! 🎉', 'success');
}

// Reset tour (for testing purposes)
function resetTour() {
    localStorage.removeItem('tourCompleted');
    showToast('Tour reset! Refresh the page to see it again.', 'success');
}

// Make resetTour available globally for testing
window.resetTour = resetTour;

