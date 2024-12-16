document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    let activeTab = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);

            // 如果點擊的是當前展開的頁籤，則收起內容
            if (activeTab === targetId) {
                targetContent.style.maxHeight = null;
                targetContent.classList.remove('active');
                activeTab = null;
                return;
            }

            // 隱藏所有內容
            contents.forEach(content => {
                content.style.maxHeight = null;
                content.classList.remove('active');
            });

            // 顯示與按鈕相關聯的內容，並計算其高度
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.maxHeight = targetContent.scrollHeight + "px";
                activeTab = targetId;
            }
        });
    });
});

const messages = [];
        const messageList = document.getElementById('messageList');
        const messageForm = document.getElementById('messageForm');
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('message');
        // 留言
        function renderMessages() {
            messageList.innerHTML = '';
            messages.forEach((msg, index) => {
                const div = document.createElement('div');
                div.classList.add('message');
                div.innerHTML = `
                    <strong>${msg.username}</strong>
                    <p>${msg.message}</p>
                `;
                messageList.appendChild(div);
            });
        }
        // 提交留言
        messageForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = usernameInput.value.trim().concat(':');
            const message = messageInput.value.trim();

            if (username && message) {
                messages.push({ username, message });
                renderMessages();
                messageForm.reset();
            }
        });

        renderMessages();