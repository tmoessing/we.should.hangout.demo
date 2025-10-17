// Sample events data for BYU student
const sampleEvents = [
    {
        id: 1,
        title: "Game Night",
        date: getTodayDate(),
        time: "19:00", // 7:00 PM
        location: "WSC 3220",
        limit: 8,
        description: "Board games and pizza! Bring your favorite games and let's have some fun.",
        attendees: ["Sarah", "Johnson", "Chen"],
        icon: "🎲",
        creator: "Sarah"
    },
    {
        id: 2,
        title: "Pickup Basketball",
        date: getTomorrowDate(),
        time: "18:00",
        location: "RB Gym",
        limit: 10,
        description: "Pickup basketball game. All skill levels welcome!",
        attendees: ["Jake", "Smith", "Kim", "Davis"],
        icon: "🏀",
        creator: "Jake"
    },
    {
        id: 4,
        title: "Y Mountain Hike",
        date: getCurrentWeekDate(6), // Saturday
        time: "07:00",
        location: "Y Mountain Trailhead",
        limit: 12,
        description: "Early morning hike to the Y! Bring water and good shoes. Great for exercise and views!",
        attendees: ["Wang", "Brown", "Lee"],
        icon: "🥾",
        creator: "Wang"
    },
    {
        id: 5,
        title: "Secret Hitler",
        date: getCurrentWeekDate(0), // Sunday
        time: "19:30",
        location: "Campus Plaza Apt 2B",
        limit: 8,
        description: "Secret Hitler game night! Bring snacks and get ready for some intense political intrigue!",
        attendees: ["You", "Johnson", "Martinez", "Kim", "Chen"],
        icon: "🎭",
        creator: "You"
    },
    {
        id: 7,
        title: "Pickleball Tournament",
        date: getCurrentWeekDate(6), // Saturday
        time: "17:00",
        location: "RB Gym",
        limit: 12,
        description: "Pickleball tournament! All skill levels welcome. Bring your paddle if you have one!",
        attendees: ["You", "Mike", "Sarah", "Alex", "Emma", "David"],
        icon: "🏓",
        creator: "Mike"
    },
    {
        id: 8,
        title: "Local Museum Tour",
        date: getCurrentWeekNextDate(1), // Next Monday
        time: "10:00",
        location: "Provo Museum of Art",
        limit: 15,
        description: "Tour of the local museum! Meet at the museum entrance. Great way to explore local culture!",
        attendees: ["Johnson", "Smith", "Davis", "Kim"],
        icon: "🏛️",
        creator: "Johnson"
    },
    {
        id: 9,
        title: "Poker Night",
        date: getCurrentWeekNextDate(5), // Next Friday
        time: "20:00",
        location: "Riviera Apts 4C",
        limit: 6,
        description: "Poker night at my place! Bring snacks and drinks. No money, just for fun!",
        attendees: ["Smith", "Davis", "Kim"],
        icon: "🃏",
        creator: "Smith"
    },
    {
        id: 10,
        title: "Volleyball Night",
        date: getCurrentWeekNextDate(2), // Next Tuesday
        time: "19:30",
        location: "RB Gym",
        limit: 12,
        description: "Volleyball night! Come play and have fun with friends.",
        attendees: ["Johnson", "Martinez", "Kim", "Chen"],
        icon: "🏐",
        creator: "Johnson"
    },
    {
        id: 11,
        title: "BBQ at the Pool",
        date: getCurrentWeekNextDate(6), // Next Saturday
        time: "17:00",
        location: "Campus Plaza Pool",
        limit: 15,
        description: "BBQ at the apartment pool! Bring swimsuits and we'll grill burgers. Pool access included!",
        attendees: ["Wang", "Brown", "Lee", "Martinez"],
        icon: "🍔",
        creator: "Wang"
    },
];

// Helper functions for dates - Week-based system
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
}

function getDateInDays(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
}

// Week-based date functions - Dynamic current week
function getThisWeekDate(dayOfWeek) {
    // dayOfWeek: 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilTarget = (dayOfWeek - currentDay + 7) % 7;
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysUntilTarget);
    return targetDate.toISOString().split('T')[0];
}

function getNextWeekDate(dayOfWeek) {
    // Get the same day next week
    const thisWeekDate = getThisWeekDate(dayOfWeek);
    const nextWeekDate = new Date(thisWeekDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    return nextWeekDate.toISOString().split('T')[0];
}

// Dynamic week-based date functions that always use current week
function getCurrentWeekDate(dayOfWeek) {
    // Always returns the specified day of the current week
    const today = new Date();
    const currentDay = today.getDay();
    const daysUntilTarget = (dayOfWeek - currentDay + 7) % 7;
    
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysUntilTarget);
    return targetDate.toISOString().split('T')[0];
}

function getCurrentWeekNextDate(dayOfWeek) {
    // Returns the specified day of next week
    const thisWeekDate = getCurrentWeekDate(dayOfWeek);
    const nextWeekDate = new Date(thisWeekDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    return nextWeekDate.toISOString().split('T')[0];
}

function getTimeInHours(hours) {
    const now = new Date();
    now.setHours(now.getHours() + hours);
    return now.toTimeString().slice(0, 5);
}

// Current user
const currentUser = "You";

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
let currentSection = 'hangout-hub';

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
// Profile elements are now handled dynamically

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderEvents();
    setupEventListeners();
    
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
    });

    closeAddModal.addEventListener('click', () => {
        addEventModal.classList.remove('show');
    });

    // Badge modal close
    const closeBadgeModal = document.getElementById('closeBadgeModal');
    closeBadgeModal.addEventListener('click', () => {
        document.getElementById('badgeModal').classList.remove('show');
    });

    cancelAddEvent.addEventListener('click', () => {
        addEventModal.classList.remove('show');
    });

    // Close modals when clicking outside
    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            eventModal.classList.remove('show');
        }
    });

    addEventModal.addEventListener('click', (e) => {
        if (e.target === addEventModal) {
            addEventModal.classList.remove('show');
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

    // Category selection
    const categoryOptions = document.querySelectorAll('.category-option');
    categoryOptions.forEach(option => {
        option.addEventListener('click', handleCategorySelection);
    });

    // Back to category button
    backToCategory.addEventListener('click', () => {
        categorySelection.style.display = 'block';
        eventDetailsForm.style.display = 'none';
    });

    // Number input buttons
    const decreaseLimit = document.getElementById('decreaseLimit');
    const increaseLimit = document.getElementById('increaseLimit');
    const eventLimit = document.getElementById('eventLimit');

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
    // Filter events based on search query
    let filteredEvents = events;
    if (searchQuery) {
        filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(searchQuery) ||
            event.location.toLowerCase().includes(searchQuery) ||
            event.description.toLowerCase().includes(searchQuery)
        );
    }

    if (filteredEvents.length === 0) {
        eventsList.innerHTML = searchQuery ? `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No events found</h3>
                <p>Try a different search term or create a new event! 🔍</p>
                <button class="create-event-btn" onclick="document.getElementById('addEventBtn').click()">
                    <i class="fas fa-plus"></i>
                    Create Event
                </button>
            </div>
        ` : `
            <div class="empty-state">
                <i class="fas fa-calendar-plus"></i>
                <h3>No events yet</h3>
                <p>Be the first to create an event and start hanging out! 🎉</p>
                <button class="create-event-btn" onclick="document.getElementById('addEventBtn').click()">
                    <i class="fas fa-plus"></i>
                    Create Event
                </button>
            </div>
        `;
        return;
    }

    // Group events by time period
    const now = new Date();
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
        return eventDate >= tomorrow && eventDate < nextMonday;
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
    document.getElementById('modalEventLimit').textContent = `${event.attendees.length}/${event.limit} people`;
    
    // Render attendees
    const attendeesList = document.getElementById('attendeesList');
    attendeesList.innerHTML = event.attendees.map(attendee => `
        <div class="attendee-item">${attendee}</div>
    `).join('');
    
    // Update join button and show appropriate actions
    const isUserAttending = event.attendees.includes(currentUser);
    const joinedActions = document.getElementById('joinedActions');
    
    if (isUserAttending) {
        joinEventBtn.style.display = 'none';
        joinedActions.style.display = 'flex';
    } else {
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
        if (event.attendees.length >= event.limit) {
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
        showToast('Successfully joined the event!', 'success');
    } else {
        showToast('Left the event', 'success');
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
    } else if (titleLower.includes('coffee') || titleLower.includes('cafe')) {
        return '☕';
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

// Handle category selection
function handleCategorySelection(e) {
    const selectedOption = e.currentTarget;
    const category = selectedOption.dataset.category;
    const icon = selectedOption.dataset.icon;
    const categoryName = selectedOption.querySelector('span').textContent;
    
    // Remove selected class from all options
    document.querySelectorAll('.category-option').forEach(option => {
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
        icon: icon
    };
    
    // Validate minimum people
    if (newEvent.limit < 3) {
        showToast('Minimum 3 people required!', 'warning');
        return;
    }

    // Validate date is not in the past
    const eventDateTime = new Date(newEvent.date + 'T' + newEvent.time);
    const now = new Date();
    if (eventDateTime < now) {
        showToast('Event date and time must be in the future!', 'warning');
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
    document.querySelectorAll('.category-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Re-render events
    renderEvents();
    renderMyEvents();
    updateProfileStats();
    
    // Show success message
    showToast('Event created successfully!', 'success');
}

// Handle navigation
function handleNavigation(section) {
    // Hide all sections
    document.getElementById('hangoutHub').style.display = 'none';
    document.getElementById('myEvents').style.display = 'none';
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
    );
    
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
                <h3>No events joined yet</h3>
                <p>Join your first event to get started! 🎉</p>
            </div>
        `;
    } else {
        attendingEventsList.innerHTML = attendingEvents.map(event => renderAttendingEventCard(event)).join('');
    }
    
    // Render hosted events
    const hostedEventsList = document.getElementById('hostedEventsList');
    if (hostedEvents.length === 0) {
        hostedEventsList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-plus"></i>
                <h3>No events created yet</h3>
                <p>Create your first event to get started! 🎉</p>
            </div>
        `;
    } else {
        hostedEventsList.innerHTML = hostedEvents.map(event => renderEventCardWithActions(event, true)).join('');
    }
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
    
    // Set realistic stats for BYU student (these would normally be calculated from actual data)
    document.getElementById('eventsCreated').textContent = '5';
    document.getElementById('eventsJoined').textContent = '12';
    document.getElementById('totalAttendees').textContent = '28';
    document.getElementById('peopleMet').textContent = '67';
    
    // Update badges
    updateBadges(5, 12, 28);
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
                <div class="attendees-count">${event.attendees.length}/${event.limit}</div>
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
                <div class="attendees-count">${event.attendees.length}/${event.limit}</div>
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
    showToast('Event deleted!', 'success');
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
    showToast('Left the event', 'success');
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
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
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

