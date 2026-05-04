import { navItems } from "@/lib/portfolio-data";

export function Sidebar() {
  return (
    <aside>
      <nav aria-label="Portfolio sections">
        <div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}
