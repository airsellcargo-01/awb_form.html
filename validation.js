document.getElementById('awbForm').addEventListener('submit', function(event) {
    // 1. Modulo 7 Validation for AWB Number
    const awbInput = document.getElementById('awb_number').value.replace(/[^0-9]/g, ''); // Strip hyphens/spaces
    
    if (awbInput.length !== 11) {
        alert('Error: Air Waybill number must be exactly 11 digits.');
        event.preventDefault();
        return;
    }

    const coreNumber = parseInt(awbInput.substring(3, 10), 10); // Next 7 digits (serial number)
    const checkDigit = parseInt(awbInput.substring(10, 11), 10); // Last digit
    
    if (coreNumber % 7 !== checkDigit) {
        alert('Error: Invalid AWB Number. Modulo 7 check failed.');
        event.preventDefault();
        return;
    }

    // 2. IATA Airport Code Validation
    const origin = document.getElementById('origin').value.toUpperCase().trim();
    const destination = document.getElementById('destination').value.toUpperCase().trim();
    const iataRegex = /^[A-Z]{3}$/;

    if (!iataRegex.test(origin) || !iataRegex.test(destination)) {
        alert('Error: Origin and Destination must be valid 3-letter IATA airport codes (e.g., DXB, JFK).');
        event.preventDefault();
        return;
    }

    // 3. Save Data to localStorage for Dashboard pipeline
    event.preventDefault(); // Prevents page reload so we can handle data saving safely

    const newShipment = {
        awbNumber: document.getElementById('awb_number').value,
        origin: origin,
        destination: destination,
        timestamp: new Date().toLocaleString(),
        status: 'Pending Departure' // Default operational status
    };

    // Retrieve existing shipments or start a new collection
    let savedShipments = JSON.parse(localStorage.getItem('airCargoShipments')) || [];
    
    // Add new document log to the beginning of the array
    savedShipments.unshift(newShipment);
    
    // Save back to browser storage
    localStorage.setItem('airCargoShipments', JSON.stringify(savedShipments));

    alert('Operation Saved Successfully! Redirecting to Dashboard...');
    window.location.href = 'index.html'; // Direct flow back to tracking panel
});
