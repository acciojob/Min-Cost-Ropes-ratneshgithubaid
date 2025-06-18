document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const ropesInput = document.getElementById('ropesInput');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        try {
            // Parse input and validate
            const input = ropesInput.value.trim();
            if (!input) throw new Error('Please enter rope lengths');
            
            const ropes = input.split(',').map(item => {
                const num = parseInt(item.trim());
                if (isNaN(num) || num < 1) throw new Error('All rope lengths must be positive integers');
                return num;
            });
            
            if (ropes.length < 1 || ropes.length > 1000) {
                throw new Error('Number of ropes must be between 1 and 1000');
            }
            
            // Calculate minimum cost
            const cost = mincost(ropes);
            resultDiv.textContent = cost;
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
        }
    });

    function mincost(arr) {
        // Create a min-heap (priority queue)
        const heap = [...arr];
        heap.sort((a, b) => a - b);
        
        let totalCost = 0;
        
        // While we have more than one rope in the heap
        while (heap.length > 1) {
            // Extract the two smallest ropes
            const first = heap.shift();
            const second = heap.shift();
            
            // Calculate the cost of connecting them
            const cost = first + second;
            totalCost += cost;
            
            // Insert the new rope back into the heap
            heap.push(cost);
            heap.sort((a, b) => a - b);
        }
        
        return totalCost;
    }
});