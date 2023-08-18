import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from "@chakra-ui/react";

export function BreadcrumbPage(data) {
  console.log("BC", data);
  return (
    <Breadcrumb>
      {data.data.map((item) => (
        <BreadcrumbItem>
          <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
