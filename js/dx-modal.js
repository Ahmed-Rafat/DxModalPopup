class DxModal {
    constructor() {
        // Define Global Elements
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;
        this.modalContainer = null;

        // Define Defualt Options
        var defaultOptions = {
            className: 'dx-modal',
            closeButton: true,
            content: "",
            maxWidth: 600,
            minWidth: 280,
            overlay: true
        }

        // Create options by Check if arguments are in default options
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = this.extendDefaultOptions(defaultOptions, arguments[0]);
        }
    }

    init() {
        this.buildModal()

        this.initializeEvents()
    }

    // Extend Properties if exist in defualt options
    extendDefaultOptions(source, properties) {
        var property;
        for (property in properties) {
            // Check if proparty by user is exist in default Options
            if (source.hasOwnProperty(property)) {
                // Change Value of defualt option
                source[property] = properties[property];
            }
        }
        return source;
    }

    buildModal() {
        var content, contentHolder; 

        if( typeof this.options.content === "string") {
            content = this.options.content
        } else {
            content = this.options.content.innerHTML
        }

        // Create a container Document elemet Modal 
        this.modalContainer = document.createElement("div");

        // Create modal element
        this.modal = document.createElement("div");
        this.modal.className = "dx-modal " + this.options.className;
        this.modal.style.minWidth = this.options.minWidth + "px";
        this.modal.style.maxWidth = this.options.maxWidth + "px";

         // If enable closeButton option ... add a close button
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("button");
            this.closeButton.className = "dx-modal-close close-button";
            this.closeButton.innerHTML = "<span>&times;</span>";
            this.modal.appendChild(this.closeButton);
        }

        // If Enable overlay .. add an Overlay
        if (this.options.overlay === true) {
            this.overlay = document.createElement("div");
            this.overlay.className = "dx-modal-overlay " + this.options.className;
            this.modalContainer.appendChild(this.overlay);
        }

        // Create content area and append to modal
        contentHolder = document.createElement("div");
        contentHolder.className = "dx-modal-content";
        contentHolder.innerHTML = content;
        this.modal.appendChild(contentHolder);

        // Append modal to DocumentFragment
        this.modalContainer.appendChild(this.modal);
        // Add Class Container
        this.modalContainer.className = "dx-modal-container " + this.options.className
        // Append DocumentFragment to body
        document.body.appendChild(this.modalContainer);
    }

    // initialize Events 
    initializeEvents() {

        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.close.bind(this));
        }
    
        if (this.overlay) {
            this.overlay.addEventListener('click', this.close.bind(this));
        }
    
    }

    open() {
        this.init()        
    }

    close() {
        this.modalContainer.style.display = "none"
    }
}
